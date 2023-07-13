import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
    as='div'
    center
    >
        <p style={{ fontSize: 16, color: "#333333", fontWeight: "500"}}> {progress.toFixed(2)}% </p>
    </Html>
  )
}

export default CanvasLoader;