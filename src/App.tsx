import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { Cactus } from './components/models/Cactus'
import { Table } from './components/models/Table'
import { Mug } from './components/models/Mug'
import { Iphone } from './components/models/Iphone'
import Computer from './components/Animations/Computer'

export default function App() {
  return (
    <Canvas shadows>
      <Environment
        background
        backgroundBlurriness={1}
        files={'hdr/background.hdr'}
        environmentIntensity={1}
      />
      <Scene />
    </Canvas>
  )
}

export const Scene = () => {
  return (
    <group scale={20} position-y={-45}>
      <directionalLight
        castShadow
        intensity={2}
        position={[2, 5.2, -3.6]}
        shadow-mapSize={[2024, 2024]}
        shadow-camera-left={-200}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <PerspectiveCamera makeDefault={true} position={[0, 10, 20]} />
      <Suspense fallback={null}>
        <Computer />
        <Iphone position={[6, -0.2, 6.6]} />
        <Cactus position={[-6.7, 0, 2]} />
        <Mug rotation-y={Math.PI / 0.56} position={[7, -0.45, 8]} />
        <Table />
        <mesh rotation-x={-Math.PI / 2} position={[0, -14.4, 6]}>
          <boxGeometry args={[60, 40, 1]} />
          <meshStandardMaterial />
        </mesh>
      </Suspense>
    </group>
  )
}
