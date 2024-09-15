import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

function Canva() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
