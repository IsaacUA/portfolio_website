import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Html } from '@react-three/drei'
import { styled } from 'styled-components'
export const FloatingText = ({
  setOpenHandler,
}: {
  setOpenHandler: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Html position={[0, 1, 6]} transform>
      <Wrapper onClick={(e) => (e.stopPropagation(), setOpenHandler(true))}>
        <FontAwesomeIcon className="icon" icon={faLaptop} />
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
