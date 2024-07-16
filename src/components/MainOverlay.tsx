import { Html } from '@react-three/drei'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVolumeHigh,
  faVolumeOff,
  faArrowPointer,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'

export const MainOverlay = ({
  hoveredHandler,
  setFreeCamHandler,
  freeCamHandler,
}: {
  hoveredHandler: boolean
  setFreeCamHandler: React.Dispatch<React.SetStateAction<boolean>>
  freeCamHandler: boolean
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const bgaudioRef = useRef(new Audio('music/backgroundmusic.wav'))

  const audioHandler = () => {
    const audio = bgaudioRef.current
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      audio.loop = true
      audio.volume = 0.1
      setIsPlaying(true)
    }
  }

  return (
    <>
      {(!freeCamHandler && hoveredHandler) || (
        <Html fullscreen zIndexRange={[-1]}>
          <Wrapper>
            <p>Dmytro Hordus</p>
            <p>Showcase Project</p>
            <button onClick={audioHandler} type="button">
              <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeOff} />
            </button>
            <button
              onClick={() => setFreeCamHandler((state) => !state)}
              type="button"
            >
              <FontAwesomeIcon
                icon={freeCamHandler ? faArrowPointer : faVideo}
              />
            </button>
          </Wrapper>
        </Html>
      )}
    </>
  )
}

const Wrapper = styled.div`
  margin: 4rem;
  max-width: 17rem;
  font-family: 'fonts/JetBrainsMono_Regular.ttf';
  p {
    font-size: 2rem;
    display: inline-block;
    color: #fff;
    background-color: #202025;
    margin-block: 0.3rem;
    padding: 0.3rem 1rem;
  }
  button {
    width: 4rem;
    height: 2.5rem;
    font-size: 1.1rem;
    margin: 0.3rem 0.6rem 0 0;
    color: #fff;
    background-color: #202025;
    cursor: pointer;
    border: none;
    &:hover {
      font-size: 1.2rem;
    }
  }
`
