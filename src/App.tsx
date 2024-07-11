import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Suspense } from 'react'
import { Cactus } from './components/models/Cactus'
import { Table } from './components/models/Table'
import { Mug } from './components/models/Mug'
import Computer from './components/Animations/Computer'

export default function App() {
  return (
    <Canvas shadows>
      <Scene />
      {/* <ambientLight intensity={1} /> */}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={(-Math.PI / 2) * 0.4}
        maxAzimuthAngle={(Math.PI / 2) * 0.4}
      />
    </Canvas>
  )
}

export const Scene = () => {
  return (
    <>
      <group position-y={-2}>
        <PerspectiveCamera makeDefault={true} position={[-40, 10, 40]} />
        <Suspense fallback={null}>
          <Computer />
          {/* <Iphone position={[6, -0.2, 6.6]} /> */}
          <Cactus position={[-6.6, 0, 4]} />
          <Mug rotation-y={Math.PI / 0.56} position={[5.5, -0.45, 7]} />
          <Table />
          <Environment
            backgroundRotation={[-Math.PI / 2, 0, 0]}
            background
            backgroundBlurriness={1}
            backgroundIntensity={0.05}
            files={'hdr/background.hdr'}
            environmentIntensity={0.05}
          />
          <ContactShadows
            scale={100}
            position={[0, -14.5, 0]}
            blur={1}
            far={20}
            opacity={0.85}
          />
        </Suspense>
      </group>
    </>
  )
}
