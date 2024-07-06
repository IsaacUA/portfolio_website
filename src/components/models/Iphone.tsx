import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Circle038: THREE.Mesh
    Circle038_1: THREE.Mesh
    Circle038_2: THREE.Mesh
    Circle038_3: THREE.Mesh
    Circle038_4: THREE.Mesh
    AntennaLineBottom001: THREE.Mesh
    AntennaLineTop001: THREE.Mesh
    AppleLogo001: THREE.Mesh
    BackCameraBottomGreyRing001: THREE.Mesh
    BackCameraBottomLens001: THREE.Mesh
    BackCameraP1001: THREE.Mesh
    BackCameraTopGreyRing001: THREE.Mesh
    BackCameraTopLens001: THREE.Mesh
    CameraBump001: THREE.Mesh
    FlashBG001: THREE.Mesh
    FrontCameraContainer001: THREE.Mesh
    FrontSpeakerBG001: THREE.Mesh
    iPhoneLogo001: THREE.Mesh
    MuteSwitch001: THREE.Mesh
    Circle032: THREE.Mesh
    Circle032_1: THREE.Mesh
    Circle031: THREE.Mesh
    Circle031_1: THREE.Mesh
    SCREEN: THREE.Mesh
    VolumeButtons001: THREE.Mesh
  }
  materials: {
    ['FrameGrey.001']: THREE.MeshStandardMaterial
    ['Front.001']: THREE.MeshStandardMaterial
    ['Antennaline.001']: THREE.MeshStandardMaterial
    ['BackGrey.001']: THREE.MeshStandardMaterial
    ['Rubber.001']: THREE.MeshStandardMaterial
    ['AppleLogo.001']: THREE.MeshStandardMaterial
    ['BackCaneraGrayRIng.002']: THREE.MeshStandardMaterial
    ['Lens.001']: THREE.MeshStandardMaterial
    ['Black.015']: THREE.MeshStandardMaterial
    ['Frame.001']: THREE.MeshStandardMaterial
    ['PinkFlash.002']: THREE.MeshStandardMaterial
    ['FrontCameraBlack.002']: THREE.MeshStandardMaterial
    ['FrontSpeaker.001']: THREE.MeshStandardMaterial
    ['iPhoneLogo.001']: THREE.MeshStandardMaterial
    ['Black.014']: THREE.MeshStandardMaterial
    ['Display.002']: THREE.MeshStandardMaterial
  }
}

export function Iphone(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/iphone.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, -0.2, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 1.2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038.geometry}
          material={materials['FrameGrey.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_1.geometry}
          material={materials['Front.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_2.geometry}
          material={materials['Antennaline.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_3.geometry}
          material={materials['BackGrey.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038_4.geometry}
          material={materials['Rubber.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AntennaLineBottom001.geometry}
          material={materials['Antennaline.001']}
          position={[0, -2.676, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AntennaLineTop001.geometry}
          material={materials['Antennaline.001']}
          position={[0, 0.018, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AppleLogo001.geometry}
          material={materials['AppleLogo.001']}
          position={[0.171, 0.521, -0.079]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={materials['BackCaneraGrayRIng.002']}
          position={[0.702, 0.884, -0.094]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={materials['Lens.001']}
          position={[0.702, 0.884, -0.083]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraP1001.geometry}
          material={materials['Black.015']}
          position={[0.705, 1.027, -0.095]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={materials['BackCaneraGrayRIng.002']}
          position={[0.702, 1.178, -0.094]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCameraTopLens001.geometry}
          material={materials['Lens.001']}
          position={[0.702, 1.178, -0.083]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CameraBump001.geometry}
          material={materials['Frame.001']}
          position={[0.704, 1.036, -0.079]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FlashBG001.geometry}
          material={materials['PinkFlash.002']}
          position={[0.705, 1.027, -0.093]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials['FrontCameraBlack.002']}
          position={[0.335, 1.323, 0.08]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials['FrontSpeaker.001']}
          position={[0.156, 1.321, 0.077]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials['iPhoneLogo.001']}
          position={[0.2, -1.175, -0.079]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MuteSwitch001.geometry}
          material={materials['FrameGrey.001']}
          position={[-0.65, 0.92, 0.009]}
        />
        <group position={[0.97, 0.562, -0.004]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle032.geometry}
            material={materials['FrameGrey.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle032_1.geometry}
            material={materials['Frame.001']}
          />
        </group>
        <group position={[0.978, -0.043, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle031.geometry}
            material={materials['Black.014']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle031_1.geometry}
            material={materials['FrameGrey.001']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SCREEN.geometry}
          material={materials['Display.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VolumeButtons001.geometry}
          material={materials['FrameGrey.001']}
          position={[-0.658, 0.208, -0.002]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/iphone.gltf')
