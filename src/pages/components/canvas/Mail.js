import {Suspense, useEffect, useState} from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei'; 

const Mail = ({isMobile}) => {
const mail = useLoader(GLTFLoader, "/mail/scene.gltf");
  
  return (
    <mesh>
        <hemisphereLight 
            intensity={0.5}
            groundColor="white"
        />
        <pointLight
            intensity={1}
        />
        <spotLight 
            position={[0, 10, 10]}
            angle={40}
            penumbra={1}
            castShadow
            shadow-mapSize={1024}
        />
        <spotLight 
            position={[0, -20, -20]}
            angle={80}
            penumbra={1}
            castShadow
            shadow-mapSize={1024}
        />
        <primitive
            object={mail.scene}
            scale={isMobile ? 4.55 : 5.45}
            position={[0, 0, 0]}
            rotation={[-0.1, -1, -0.05]}
        />
    </mesh>
  )
}

export default function MailCanvas() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1400px)');

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
            camera={{ position : [10, 20, 80], fov: 20}}
            gl={{ preserveDrawingBuffer: true }}
            className='c-3d-canvas'
        >
            <Suspense fallback={"Loading..."}>
                <OrbitControls 
                    autoRotate
                    autoRotateSpeed={0.5}
                    enableZoom={false}
                    enableRotate
                />
                <Mail isMobile={isMobile}/>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}
