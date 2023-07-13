import {Suspense, useEffect, useState} from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// import CanvasLoader from '../Loader';

const Laptop = () => {
const laptop = useLoader(GLTFLoader, "/laptop/scene.gltf");
  
  return (
    <mesh>
        <hemisphereLight 
            intensity={0.15}
            groundColor="black"
        />
        <pointLight
            intensity={1}
        />
        <primitive
            object={laptop.scene}
            scale={1.6}
            position={[0, -10, 10]}
        />
    </mesh>
  )
}

export default function LaptopCanvas() {
    return(
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position : [20, 110, 60], fov: 30}}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2.3}
                    minPolarAngle={Math.PI / 2.3}
                />
                <Laptop />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
