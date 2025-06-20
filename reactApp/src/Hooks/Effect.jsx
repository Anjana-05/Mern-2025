import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [count,setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {setCount(count+1)
    },2000)
  },[count]) //auto increment after 2seconds
  

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
    <>
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    </>
  )
}

export default Effect