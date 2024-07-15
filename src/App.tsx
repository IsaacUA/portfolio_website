import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { useSpring } from 'react-spring'
import { useState } from 'react'

import { SceneModel } from './components/models/SceneModel'
import { MacbookModel } from './components/models/MacbookModel'
import { FloatingText } from './components/models/FloatingText'

export default function App() {
  return (
    <>
      <Loader
        containerStyles={{ backgroundColor: '#202025' }}
        innerStyles={{ width: '20rem', height: '.5rem' }}
        barStyles={{ height: '100%' }}
        dataInterpolation={(p) => `STAND BY ${p.toFixed(0)}%`}
        dataStyles={{ fontSize: '1.5rem', fontFamily: 'JetBrains Mono' }}
      />
      <Canvas shadows gl={{ powerPreference: 'low-power', precision: 'lowp' }}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.5}
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={Math.PI / 8}
        />
        <Scene />
      </Canvas>
    </>
  )
}

const Scene = () => {
  const [open, setOpen] = useState(false)
  const props = useSpring({
    open: Number(open),
    config: {
      mass: 50,
      tension: open ? 151 : 120,
      friction: 130,
    },
  })
  return (
    <>
      <PerspectiveCamera makeDefault={true} position={[-60, 20, 40]} />
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
      {open || <FloatingText />}
      <MacbookModel
        hinge={props.open.to([0, 1], [1.575, -0.3])}
        open={open}
        setOpenHandler={setOpen}
      />
      <SceneModel />
      <Environment
        backgroundRotation={[-Math.PI / 2, 0, 0]}
        background
        backgroundBlurriness={1}
        files={'hdr/background.hdr'}
        backgroundIntensity={0.6}
      />
    </>
  )
}
