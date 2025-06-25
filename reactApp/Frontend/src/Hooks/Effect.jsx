import React, { useEffect, useState ,useRef} from 'react'

const Effect = () => {
  const [count,setCount] = useState(0);//useState used it will make the page render everytime when we change something
  const value= useRef(0);//useRef used it will make the page render not everytime when we change something
  useEffect(() => {
    setTimeout(() => {setCount(count+1)
    },2000)
    console.log("Count page rendered");
  },[count]) //auto increment after 2seconds
  

  useEffect(() => {
    value.current = value.current+1;
        console.log("Value page rendered");

  })
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
        <h1>{value.current}</h1>
    </div>
    </>
  )
}

export default Effect