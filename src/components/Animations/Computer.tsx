import { Float, Text3D } from '@react-three/drei'
import { useState } from 'react'
import { useSpring } from 'react-spring'
import { MacbookModel } from '../models/MacbookModel'
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

  return (
    <mesh>
      {open || (
        <Float>
          <Text3D
            font={'fonts/JetBrainsMono_Regular.json'}
            position={[-2, 1.5, 4]}
          >
            {'Click \n  ↓'}
            <meshStandardMaterial />
          </Text3D>
        </Float>
      )}
      <MacbookModel
        hinge={props.open.to([0, 1], [1.575, -0.3])}
        open={open}
        setOpenHandler={setOpen}
      />
    </mesh>
  )
}
export default Computer
