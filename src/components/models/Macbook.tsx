import * as THREE from 'three'
import { Html, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { animated, Interpolation } from '@react-spring/three'
import { useEffect, useRef, useState } from 'react'
import Overlay from '../Overlay'
import { useFrame } from '@react-three/fiber'

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

export function Macbook({
  open,
  hinge,
  setOpenHandler,
  ...props
}: {
  open: boolean
  hinge: Interpolation<number, -0.2 | 1.575>
  setOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
} & JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/mac.glb') as GLTFResult
  const macToplidRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'auto' : 'pointer'
  }, [hovered])

  useFrame((state) => {
    if (hovered && open) {
      state.camera.position.lerp(
        {
          x: 0,
          y: 3.8,
          z: 9,
        },
        0.01
      )
    } else {
      state.camera.position.lerp(
        {
          x: 0,
          y: 10,
          z: 30,
        },
        0.01
      )
    }
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group {...props} dispose={null}>
      <animated.group
        position={[0.002, -0.038, 0.414]}
        rotation-x={hinge}
        rotation={[0, 0, 0]}
        onClick={(e) => (e.stopPropagation(), setOpenHandler(!open))}
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
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials['matte.001']}
          />
          <mesh geometry={nodes.Cube008_2.geometry}>
            {open && (
              <rectAreaLight
                // receiveShadow
                // castShadow
                rotation-x={Math.PI / 2}
                intensity={2}
                position={[0, 0, 0]}
                width={8.4}
                height={6}
              />
            )}
            <Html
              className="content"
              rotation-x={-Math.PI / 2}
              position={[0, 0.05, -0.09]}
              transform
              scale={0.29}
              occlude={[macToplidRef]}
            >
              <div
                onPointerOver={(e) => {
                  e.stopPropagation()
                  setHovered(true)
                }}
                onPointerOut={(e) => {
                  e.stopPropagation()
                  setHovered(false)
                }}
                className="screen"
              >
                {open && <Overlay />}
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
      />
    </group>
  )
}

useGLTF.preload('models/mac.glb')
