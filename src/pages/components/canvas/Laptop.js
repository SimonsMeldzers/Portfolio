import {Suspense, useEffect, useState} from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei'; 

const Laptop = ({isMobile}) => {
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
        <spotLight 
            position={[20, 50, 10]}
            angle={0.4}
            penumbra={1}
            castShadow
            shadow-mapSize={1024}
        />
        <primitive
            object={laptop.scene}
            scale={isMobile ? 1 : 1.45}
            position={[0, -10, 10]}
            rotation={[-0.01, -0.01, -0.01]}
        />
    </mesh>
  )
}

export default function LaptopCanvas() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 510px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }

    }, [])
    return(
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position : [20, 110, 60], fov: 30}}
            gl={{ preserveDrawingBuffer: true }}
            className='b-3d-canvas'
        >
            <Suspense fallback={"Loading..."}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2.3}
                    minPolarAngle={Math.PI / 2.3}
                />
                <Laptop isMobile={isMobile}/>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
