import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { animated, useSpring } from '@react-spring/three'
import { useRef } from 'react'
import { useModel } from '../../context/ModelContext'
import { useFrame } from '@react-three/fiber'
import { FloatingText } from './FloatingText'
import { faClose, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const { VITE_APP_INNER_WEBSITE } = import.meta.env

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
    Cube008_2: THREE.Mesh
    keyboard: THREE.Mesh
    Cube002: THREE.Mesh
    Cube002_1: THREE.Mesh
    touchbar: THREE.Mesh
  }
  materials: {
    aluminium: THREE.MeshStandardMaterial
    ['matte.001']: THREE.MeshStandardMaterial
    ['screen.001']: THREE.MeshStandardMaterial
    keys: THREE.MeshStandardMaterial
    trackpad: THREE.MeshStandardMaterial
    touchbar: THREE.MeshStandardMaterial
  }
}

export function MacbookModel() {
  const { nodes, materials } = useGLTF('models/mac.glb') as GLTFResult
  const { open, freeCam, openLaptop } = useModel()
  const macToplidRef = useRef<THREE.Mesh>(null!)

  const props = useSpring({
    open: Number(open),
    config: {
      mass: 50,
      tension: open ? 151 : 120,
      friction: 130,
    },
  })

  useFrame((state) => {
    if (open && !freeCam) {
      state.camera.position.lerp(
        {
          x: 0,
          y: 2,
          z: 11,
        },
        0.04
      )
    }

    if (!open && !freeCam) {
      state.camera.position.lerp(
        {
          x: 0,
          y: 10,
          z: 30,
        },
        0.1
      )
    }
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group {...props} dispose={null} position={[0, -2, 3]}>
      <animated.group
        position={[0.002, -0.038, 0.414]}
        rotation-x={props.open.to([0, 1], [1.575, -0.3])}
        rotation={[0, 0, 0]}
      >
        <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            ref={macToplidRef}
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            castShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials['matte.001']}
          />
          <mesh geometry={nodes.Cube008_2.geometry}>
            <meshStandardMaterial color={'#000'} />

            <Html
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              scale={0.29}
              occlude={[macToplidRef]}
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  border: 'none',
                  padding: '0',
                  margin: '0',
                  width: '1152px',
                  height: '750px',
                  backgroundColor: '#000',
                }}
              >
                {open && (
                  <iframe
                    src={VITE_APP_INNER_WEBSITE}
                    name="myiFrame"
                    frameBorder="0"
                    width="1152"
                    height="750"
                  />
                )}
              </div>
            </Html>
          </mesh>
        </group>
      </animated.group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.793, 0, 3.451]}
      />
      <group position={[0, -0.1, 3.394]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.aluminium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.trackpad}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, -0.027, 1.201]}
      >
        {open && (
          <FloatingText
            position={[-3.3, 0.17, -0.35]}
            icon={faClose}
            action={openLaptop}
            scale={0.3}
            occlude={true}
          />
        )}
        {open && (
          <FloatingText
            position={[-2.3, 0.17, -0.35]}
            icon={faUpRightFromSquare}
            action={() => {
              location.href = VITE_APP_INNER_WEBSITE
            }}
            scale={0.3}
            occlude={true}
          />
        )}
      </mesh>
    </group>
  )
}

useGLTF.preload('models/mac.glb')
