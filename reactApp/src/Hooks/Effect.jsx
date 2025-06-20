import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count,setCount] = useState(0);
  const [num,setNumber] = useState(0);
  useEffect(() => {
    console.log('UseEffect Rendered')
  },[count])
  
  const increment=() => {
    setCount(count+1);
  }

  const increment2=() => {
    setNumber(num+1);
  }
  const decrement=() => {
    setCount(count-1);
  }
  const reset=() => {
    setCount(0);
  }
  return (
    <>
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>

    <div>
      <h1>{num}</h1>
      <button onClick={increment2}>Increment</button>
    </div>
    </>
  )
}

export default Effect