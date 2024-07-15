import { useProgress } from '@react-three/drei'

export const LoadingScreen = () => {
  const { progress } = useProgress()

  return (
    <div style={{ position: 'absolute', left: '0', right: '0' }}>
      {progress < 30 ? <h1>Just started</h1> : null}
      {progress > 30 && progress < 60 ? <h1>In the middle</h1> : null}
      {progress > 60 ? <h1>Almost there</h1> : null}
    </div>
  )
}
