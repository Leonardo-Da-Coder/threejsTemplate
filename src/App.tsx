
import { Canvas } from "@react-three/fiber"
import { Experience } from "./components/Experience"
import { useControls } from "leva"
import { Stage } from "@react-three/drei"

function App() {
  const {color} = useControls({color: '#6c6eb4'})
  return (
  <div className="container" style={{background: color}}>
  <Canvas shadows camera={{position: [4,0,-12], fov:35}}>
    <Stage preset={"upfront"}>
      <Experience/>
    </Stage>
  </Canvas>
  </div>
  )
}

export default App
