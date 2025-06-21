import React, { useReducer } from 'react'

const ReducerFunction = (state,action) => {
    switch(action.type){
        case "Increment":
            return {count:state.count+1}
        case "Decrement":
            return {count:state.count-1}
        case "Reset":
            return {count:0}
        default:
            return {count:0}
    }
}
const Reducer = () => {
    const [state,dispatch] = useReducer(ReducerFunction,{count:0}) 
  return (
    <>
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {dispatch({type:"Increment"})}}>Increment</button>
            <button onClick={() => {dispatch({type:"Reset"})}}>Reset</button>
            <button onClick={() => {dispatch({type:"Decrement"})}}>Decrement</button>
        </div>
    </>
  )
}

export default Reducer