import React, { useState } from 'react'

const counter = () => {
  const [count,setCout] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => {setCout(count+1)}}>Increment</button>
        <button onClick={() => setCout(0)}>Reset</button>
        <button onClick={() => {setCout(count-1)}}>Decrement</button>

    </div>
  )
}

export default counter