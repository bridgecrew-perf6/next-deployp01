import React from 'react'
import Image from 'next/image'
import Hello  from './hello'
import foto from './foto.png'
function HomePage () {
  return (
  <>
  <h1>hello world</h1>
  <Image
  src={foto} 
  width={250}
  height={400}
  placeholder="blur"
  />
  <Hello />
  <style jsx>{`
  h1 {
    text-align: center;
  }
  `}</style>
  </>
  )
}
export default HomePage
