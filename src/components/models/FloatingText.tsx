import { Float, Text3D } from '@react-three/drei'

export const FloatingText = () => {
  return (
    <Float>
      <Text3D font={'fonts/JetBrainsMono_Regular.json'} position={[-2, 1.5, 4]}>
        {'Click \n  ↓'}
        <meshStandardMaterial />
      </Text3D>
    </Float>
  )
}
