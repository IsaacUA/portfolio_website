import { Html } from '@react-three/drei'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faVolumeHigh,
  faVolumeOff,
  faArrowPointer,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { Howl } from 'howler'
import { useModel } from './context/ModelContext'

export const MainOverlay = () => {
  const { open, freeCam, changeCam } = useModel()
  const [isPlaying, setIsPlaying] = useState(false)
  const bgaudioRef = useRef(
    new Howl({
      src: ['music/backgroundmusic.mp3'],
      loop: true,
      volume: 0.1,
    })
  )

  const audioHandler = () => {
    const audio = bgaudioRef.current
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      {(!freeCam && open) || (
        <Html fullscreen zIndexRange={[-1]}>
          <Wrapper>
            <p>Dmytro Hordus</p>
            <p>Showcase Project</p>
            <button
              onClick={audioHandler}
              type="button"
              title="Turn ON/OFF music"
            >
              <FontAwesomeIcon
                className="icon"
                icon={isPlaying ? faVolumeHigh : faVolumeOff}
              />
            </button>
            <button onClick={changeCam} type="button" title="Free Cam ON/OFF">
              <FontAwesomeIcon
                className="icon"
                icon={freeCam ? faVideo : faArrowPointer}
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
    margin: 0.3rem 0.6rem 0 0;
    color: #fff;
    background-color: #202025;
    cursor: pointer;
    border: none;

    &:hover .icon {
      scale: 1.9;
    }
    &:active .icon {
      scale: 2;
    }
  }
  .icon {
    scale: 1.6;
  }
`
