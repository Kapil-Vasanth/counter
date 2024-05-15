import React, { useState } from 'react'

function Counter() {
    const [count,setCount] =  useState(0);
    

  return (
    <div>
        <h1>Counter App</h1>
        <div>Count : {count}</div>
        <button onClick={e => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={e => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}


export default Counter