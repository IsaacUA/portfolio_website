import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Cactus } from './components/models/Cactus'
import { Table } from './components/models/Table'
import { Mug } from './components/models/Mug'
import { Iphone } from './components/models/Iphone'
import Computer from './components/Animations/Computer'
import * as THREE from 'three'
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
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={(-Math.PI / 2) * 0.5}
        maxAzimuthAngle={(Math.PI / 2) * 0.5}
      />
    </Canvas>
  )
}

export const Scene = () => {
  const ref = useRef(null!)
  const v = new THREE.Vector3()
  useFrame((state) => {
    v.copy({ x: state.pointer.x, y: state.pointer.y, z: 0 })
    v.unproject(state.camera)

    state.camera.position.lerp(
      {
        x: -state.pointer.x * 20,
        y: -state.pointer.y * 25,
        z: 20,
      },
      0.001
    )

    state.camera.updateProjectionMatrix()
  })

  return (
    <group scale={10}>
      <directionalLight
        castShadow
        ref={ref}
        intensity={2}
        position={[2, 5.2, -3.6]}
        shadow-mapSize={[2024, 2024]}
        shadow-camera-left={-200}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <PerspectiveCamera makeDefault={true} position={[-4.4, 10, 20]} />
      <Suspense fallback={null}>
        <Computer />
        <Iphone position={[6, -0.2, 6.6]} />
        <Cactus position={[-6, 0, 2]} />
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
