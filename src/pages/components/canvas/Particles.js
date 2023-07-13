import {Suspense, useEffect, useState} from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

import Loader from '../Loader';
// import CanvasLoader from '../Loader';

const Particles = () => {
const particles = useLoader(GLTFLoader, "/particles/scene.gltf");
  
  return (
    <mesh>
        <primitive
            object={particles.scene}
            scale={8.6}
            position={[1, 0, 0]}
            rotation={[220, 1, 3]}
        />
    </mesh>
  )
}

export default function ParticlesCanvas() {
    return(
        <Canvas
            className="b-3d-background"
            frameloop='demand'
            camera={{ position : [10, 1, 2], fov: 100}}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2.3}
                    minPolarAngle={Math.PI / 2.3}
                />
                <Particles />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
