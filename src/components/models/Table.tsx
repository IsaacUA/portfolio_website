import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube007: THREE.Mesh
    Cube007_1: THREE.Mesh
  }
  materials: {
    MetalBlack: THREE.MeshStandardMaterial
    DeskWood: THREE.MeshStandardMaterial
  }
}

export function Table(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/table.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, -2.8, 2]} scale={19} rotation-y={-Math.PI / 2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.MetalBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials.DeskWood}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/table.glb')
