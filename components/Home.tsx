import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
        <Link href={'/Home'} passHref> Home</Link>
    </div>
  )
}

export default Home