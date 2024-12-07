import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div>
        <Link href={'/About'} passHref> About</Link>
    </div>
  )
}

export default About