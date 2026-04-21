
import { Canvas } from "@react-three/fiber"
import {Stage} from "@react-three/drei"
import { Experience } from "./components/Experience"

function App() {
  return (
  <Canvas shadows camera={{position: [4,0,-12], fov:35}}>
    <Stage>
      <Experience></Experience>
    </Stage>
  </Canvas>
  )
}

export default App
