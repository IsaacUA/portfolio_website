import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cup: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export function Mug(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/mug.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        position={[0, -0.4, 0]}
        castShadow
        receiveShadow
        geometry={nodes.Cup.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
}

useGLTF.preload('models/mug.gltf')
