import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Suspense } from 'react'
import Computer from './components/Animations/Computer'
import { SceneModel } from './components/models/SceneModel'
export default function App() {
  return (
    <Canvas shadows gl={{ powerPreference: 'low-power', precision: 'lowp' }}>
      <Scene />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.5}
        minAzimuthAngle={-Math.PI / 8}
        maxAzimuthAngle={Math.PI / 8}
      />
    </Canvas>
  )
}

export const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault={true} position={[-60, 20, 40]} />
      <Suspense fallback={null}>
        <Computer />
        <SceneModel />
        <Environment
          backgroundRotation={[-Math.PI / 2, 0, 0]}
          background
          backgroundBlurriness={1}
          preset="sunset"
          backgroundIntensity={0.6}
        />
        <directionalLight
          castShadow
          position={[12, 8, 10]}
          intensity={4}
          shadow-mapSize={[8024, 8024]}
          shadow-camera-left={-400}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
          shadow-normalBias={1}
        />
        <ContactShadows
          scale={100}
          position={[0, -16, 0]}
          blur={1}
          far={20}
          opacity={0.85}
        />
      </Suspense>
    </>
  )
}
