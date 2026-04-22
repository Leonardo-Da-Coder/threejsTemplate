
import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { useControls } from "leva"
import { Stage } from "@react-three/drei"
import { Suspense } from "react"

function App() {
  const { color } = useControls({ color: '#6c6eb4' })
  return (
    <div className="container" style={{ background: color }}>
      <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
