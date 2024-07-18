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
import {
  initState,
  ModelProvider,
  useModel,
} from './components/context/ModelContext'
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
        <PerspectiveCamera makeDefault={true} position={[-60, 20, 40]} />
        <ModelProvider
          light={initState.light}
          open={initState.open}
          freeCam={initState.freeCam}
        >
          <Scene />
        </ModelProvider>
        <ContactShadows
          scale={100}
          position={[0, -16, 0]}
          blur={1}
          far={20}
          opacity={0.85}
        />
      </Canvas>
    </>
  )
}

const Scene = () => {
  const { open, light, freeCam, openLaptop, changeLight } = useModel()

  return (
    <>
      <OrbitControls
        enableRotate={open ? false : true}
        autoRotateSpeed={0.5}
        autoRotate={freeCam ? true : false}
        minDistance={freeCam ? 30 : 0}
        maxDistance={70}
        enablePan={false}
        enableZoom={freeCam ? true : false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.5}
        minAzimuthAngle={freeCam ? undefined : -Math.PI / 8}
        maxAzimuthAngle={freeCam ? undefined : Math.PI / 8}
      />
      {light && (
        <spotLight
          castShadow
          angle={2.6}
          position={[8, 5.5, 4]}
          intensity={1}
          power={10}
          distance={20}
          decay={0.2}
          shadow-normalBias={1}
        />
      )}
      {light || (
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
      )}
      {!freeCam && !open && (
        <FloatingText
          icon={faLaptop}
          position={[0, 0.5, 6]}
          action={openLaptop}
        />
      )}
      {!freeCam && (
        <FloatingText
          icon={faLightbulb}
          position={[8.7, 0.5, 3.2]}
          audioPath={'music/lampClick.wav'}
          action={changeLight}
        />
      )}
      <MainOverlay />
      <MacbookModel />
      <SceneModel />
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
