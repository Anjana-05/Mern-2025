import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', padding:'8px', gap: "8px"}}>
        <Link to='/state'>useState</Link>
        <Link to='/effect'>useEffect</Link>
    </div>
  )
}

export default Hooks