import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div>
        <Link href={'/Dashboard'} passHref> Dashboard</Link>
    </div>
  )
}

export default Dashboard