import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', padding:'8px', gap: "8px"}}>
        <Link to='/state'>useState</Link>
        <Link to='/effect'>useEffect1</Link>
        <Link to='/effect2'>useEffect2</Link>
        <Link to='/reducer'>Reducer</Link>
    </div>
  )
}

export default Hooks