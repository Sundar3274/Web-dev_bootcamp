import React from 'react'

const matches = [
    {place:'mumbai',match:'ind vs wi'},
     {place:'mumbai',match:'eng vs wi'},
    {place:'mumbai',match:'ind vs sf'}
]


function Render() {
  return (
    <ol>
        {
            matches.map(hi =>
                <li>
                    <div>
                        <h1>{hi.match}</h1>
                        <h2>{hi.place}</h2>
                    </div>
                    
                </li>
            )
        }
    </ol>
  )
}

export default Render