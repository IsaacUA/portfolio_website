import { Float, Text3D } from '@react-three/drei'
import { useEffect, useState } from 'react'

import { useSpring } from 'react-spring'
import { Macbook } from '../models/Macbook'
const Computer = () => {
  const [open, setOpen] = useState(false)
  const props = useSpring({
    open: Number(open),
    config: {
      mass: 50,
      tension: open ? 151 : 120,
      friction: 130,
    },
  })
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <mesh
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => (e.stopPropagation(), setOpen(!open))}
    >
      {open || (
        <Float>
          <Text3D
            font={'/fonts/JetBrainsMono_Regular.json'}
            position={[-2, 2, 5]}
            castShadow
            receiveShadow
          >
            Click
            <meshStandardMaterial />
          </Text3D>
        </Float>
      )}
      <Macbook
        position={[0, -0.3, 2]}
        hinge={props.open.to([0, 1], [1.575, -0.2])}
        open={open}
      />
    </mesh>
  )
}
export default Computer
