"use client"

import Image from 'next/image'

export default function ClientImage(props) {
  // Use a simple onError handler to hide the image if it fails to load
  // This runs only on the client, so it's safe to pass function props
  const handleError = (e) => {
    // use currentTarget for better typing consistency
    if (e.currentTarget) e.currentTarget.style.display = 'none'
  }

  return <Image {...props} onError={handleError} />
}
