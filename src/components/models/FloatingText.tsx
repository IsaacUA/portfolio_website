import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Html } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { styled } from 'styled-components'
import { useModel } from '../../context/ModelContext'

export const FloatingText = ({
  position,
  icon,
  audioPath,
  action,
}: {
  position: Vector3
  icon: IconDefinition
  audioPath?: string | string[]
  action: () => void
}) => {
  const { sound } = useModel()
  let audio: Howl
  if (audioPath) {
    audio = new Howl({
      src: audioPath,
      volume: sound ? 0.2 : 0,
    })
  }

  return (
    <Html position={position} transform>
      <Wrapper
        onClick={(e) => {
          action()
          e.stopPropagation()
          if (audioPath) {
            audio.play()
          }
        }}
      >
        <FontAwesomeIcon className="icon" icon={icon} />
      </Wrapper>
    </Html>
  )
}

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50% 50% 50% 0;
  background: #202025;
  transform: rotate(-45deg);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .icon {
    transform: rotate(45deg);
    font-size: 2rem;
  }
  &:hover .icon {
    font-size: 2.2rem;
  }
  &:active {
    scale: 1.1;
  }
`
