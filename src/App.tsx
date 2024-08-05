import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { SceneModel } from './components/models/SceneModel'
import { MacbookModel } from './components/models/MacbookModel'
import { FloatingText } from './components/models/FloatingText'
import { MainOverlay } from './components/MainOverlay'
import { faLaptop, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { initState, ModelProvider, useModel } from './context/ModelContext'
import { useEffect, useRef, useState } from 'react'
import { isMobile, isSafari } from 'react-device-detect'

export default function App() {
  // Quick fix of DPI bug with Drei HTML element
  const [height, setHeight] = useState('100dvh')
  const [width, setWidth] = useState('100vw')
  const canvasRef = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    const measureCanvasSize = () => {
      const canvasElement = canvasRef.current
      if (canvasElement) {
        const canvasHeight = canvasElement.clientHeight
        const canvasWidth = canvasElement.clientWidth

        if (isSafari) {
          if (canvasHeight % 2 !== 0) {
            setHeight(`${canvasHeight - 1}px`)
          } else {
            setHeight(`${canvasHeight}px`)
          }

          if (canvasWidth % 2 !== 0) {
            setWidth(`${canvasWidth - 1}px`)
          } else {
            setWidth(`${canvasWidth}px`)
          }
        } else {
          setHeight('100dvh')
          setWidth('100vw')
        }
      }
    }
    window.requestAnimationFrame(measureCanvasSize)
    const handleResize = () => {
      measureCanvasSize()
    }
    if (!isMobile && isSafari) {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return (
    <>
      <Loader
        containerStyles={{ backgroundColor: '#202025' }}
        innerStyles={{ width: '20rem', height: '.5rem' }}
        barStyles={{ height: '100%' }}
        dataInterpolation={(p) => `STAND BY ${p.toFixed(0)}%`}
        dataStyles={{ fontSize: '1.5rem', fontFamily: 'JetBrains Mono' }}
      />
      <div style={{ height: height, width: width }} ref={canvasRef}>
        <Canvas
          shadows
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
          }}
        >
          <PerspectiveCamera makeDefault={true} position={[-60, 20, 60]} />
          <ModelProvider
            light={initState.light}
            open={initState.open}
            freeCam={initState.freeCam}
            sound={initState.sound}
          >
            <Scene />
          </ModelProvider>
        </Canvas>
      </div>
    </>
  )
}

const Scene = () => {
  const { open, light, freeCam, openLaptop, changeLight } = useModel()
  const ratioParam = Math.min(window.innerWidth / 820, 1)
  return (
    <>
      <OrbitControls
        enableRotate={!open}
        enablePan={false}
        autoRotateSpeed={0.5}
        maxDistance={70}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={freeCam ? 30 : 0}
        enableZoom={freeCam ? true : false}
        autoRotate={freeCam ? true : false}
        minAzimuthAngle={freeCam ? undefined : -Math.PI / 8}
        maxAzimuthAngle={freeCam ? undefined : Math.PI / 8}
      />
      <MainOverlay />
      <spotLight
        castShadow
        angle={2.6}
        position={[8, 5.5, 4]}
        intensity={light ? 2 : 0}
        power={10}
        distance={20}
        decay={0.2}
        shadow-normalBias={1}
      />
      <directionalLight
        castShadow
        position={[12, 8, 10]}
        intensity={light ? 0 : 4}
        shadow-mapSize={[4024, 4024]}
        shadow-camera-left={-400}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-normalBias={1}
      />
      <group scale={ratioParam}>
        {!freeCam && !open && (
          <FloatingText
            icon={faLaptop}
            position={[0, 0.5, 5]}
            action={openLaptop}
          />
        )}
        {!freeCam && (
          <FloatingText
            icon={faLightbulb}
            position={[8.7, 0.3, 3.2]}
            audioPath={'music/lampClick.webm'}
            action={changeLight}
          />
        )}
        <MacbookModel />
        <SceneModel />
      </group>
      <ContactShadows
        scale={100}
        position={[0, -16 * ratioParam, 0]}
        blur={1}
        far={20}
        opacity={0.85}
      />
      <Environment
        backgroundRotation={[-Math.PI / 2, 0, 0]}
        background
        backgroundBlurriness={1}
        files={'hdr/background.hdr'}
        backgroundIntensity={light ? 0.04 : 0.6}
        environmentIntensity={light ? 0.1 : 1}
      />
    </>
  )
}
