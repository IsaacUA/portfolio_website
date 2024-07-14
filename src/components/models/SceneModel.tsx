import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    lowpolyobj: THREE.Mesh
    lowpolyobj001: THREE.Mesh
    DeskChairobj: THREE.Mesh
    RubbishBinobj: THREE.Mesh
    UtensilCupWithobj: THREE.Mesh
    lowpolyobj005: THREE.Mesh
    lowpolyobj003: THREE.Mesh
    lowpolyobj004: THREE.Mesh
    lowpolyobj006: THREE.Mesh
    lowpolyobj007: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.018']: THREE.MeshStandardMaterial
  }
}

export function SceneModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/scene.glb') as GLTFResult
  return (
    <group {...props} dispose={null} scale={8} position={[0, -2.1, 4]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowpolyobj.geometry}
        material={materials['Material.006']}
        position={[0.051, -1.718, -0.028]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowpolyobj001.geometry}
        material={materials['Material.007']}
        position={[1.072, -0.015, -0.143]}
        rotation={[Math.PI / 2, 0, 0.885]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DeskChairobj.geometry}
        material={materials['Material.008']}
        position={[0.648, -1.718, 1.594]}
        rotation={[Math.PI / 2, 0, 2.682]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RubbishBinobj.geometry}
        material={materials['Material.009']}
        position={[2.676, -1.718, 0.172]}
        rotation={[Math.PI / 2, 0, -1.471]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.UtensilCupWithobj.geometry}
        material={materials['Material.011']}
        position={[-0.638, -0.025, -0.35]}
        rotation={[Math.PI / 2, 0, 0.764]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowpolyobj005.geometry}
        material={materials['Material.017']}
        position={[1.204, -0.015, 0.343]}
        rotation={[Math.PI / 2, 0, 1.21]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowpolyobj003.geometry}
        material={materials['Material.002']}
        position={[-1.358, 0.03, -0.343]}
        rotation={[Math.PI / 2, 0, -0.302]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowpolyobj004.geometry}
        material={materials['Material.001']}
        position={[-1.355, -0.015, -0.338]}
        rotation={[Math.PI / 2, 0, -0.302]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowpolyobj006.geometry}
        material={materials['Material.004']}
        position={[-1.355, 0.186, -0.338]}
        rotation={[Math.PI / 2, 0, -0.302]}
        scale={2.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lowpolyobj007.geometry}
        material={materials['Material.018']}
        position={[-1.358, 0.23, -0.343]}
        rotation={[Math.PI / 2, 0, -0.302]}
        scale={2.241}
      />
    </group>
  )
}

useGLTF.preload('models/scene.glb')
