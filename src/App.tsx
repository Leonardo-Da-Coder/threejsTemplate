
import { Canvas } from "@react-three/fiber"
import {Stage} from "@react-three/drei"
import { Experience } from "./components/Experience"
import { useControls } from "leva"

function App() {
  const {color} = useControls({color: '#6c6eb4'})
  return (
  <div className="container" style={{background: color}}>
  <Canvas shadows camera={{position: [4,0,-12], fov:35}}>
    <Stage>
      <Experience/>
    </Stage>
  </Canvas>
  </div>
  )
}

export default App
