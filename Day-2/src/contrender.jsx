import React from 'react'

const isloggedin = true


function Contrender() {
  return (
    
        isloggedin ? 
        <h1 style={{color:'green'}}>Hello! i'm logged in</h1> :

        <h1 style={{color:'red'}}>please log in </h1>
    
  )
}

export default Contrender
