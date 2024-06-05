//COUNTER APP

import React, { useState } from 'react'

function State() {
    const [count,setCount] = useState(0)
    function increase () {
        setCount(count + 1)
    }

    function zero () {
        setCount(0)
    }

    function decreases () {
        setCount(count - 1)
    }


  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={increase}>increament</button>
        <button onClick={zero}>reset</button>
        <button onClick={decreases}>decrement</button>
    </div>
  )
}

export default State