import React, { useState } from 'react'

const State = () => {
  const [count,setCount] = useState(0);
  const increment=() => {
    setCount(count+1);
  }
  const decrement=() => {
    setCount(count-1);
  }
  const reset=() => {
    setCount(0);
  }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default State