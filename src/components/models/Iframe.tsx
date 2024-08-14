import { useState } from 'react'

const { VITE_APP_INNER_WEBSITE } = import.meta.env

const Iframe = () => {
  const [isMounted, setIsMounted] = useState(false)

  setTimeout(() => setIsMounted(true), 1400)

  return (
    <>
      {isMounted && (
        <iframe
          src={VITE_APP_INNER_WEBSITE}
          name="myiFrame"
          frameBorder="0"
          width="1152"
          height="750"
        />
      )}
    </>
  )
}

export default Iframe
