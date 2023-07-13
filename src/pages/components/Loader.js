import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();

  return (
    <Html>
        <span className='canvas-loader'>  </span>
        <p style={{ fontSize: 16, color: "#333333", fontWeight: "500"}}> {progress.toFixed(2)}% </p>
    </Html>
  )
}

export default Loader;