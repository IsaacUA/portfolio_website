import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    pot: THREE.Mesh
    ground: THREE.Mesh
    cactus: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder005: THREE.Mesh
    Cylinder007: THREE.Mesh
    Cylinder009: THREE.Mesh
    Cylinder011: THREE.Mesh
    Cylinder013: THREE.Mesh
    Cylinder015: THREE.Mesh
    Cylinder017: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
  }
}

export function Cactus(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/cactus.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.5, 0]} scale={1.4}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pot.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cactus.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials['Material.005']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/cactus.gltf')
