import React from 'react'
import profpic from "../assets/profpic.jpeg"
import taskimg from "../assets/taskimg.png"

function Content() {
  return (
    <div className='maincontent'>
        {/* leftcontent */}
        <div className='leftcontent'>
            <img src={profpic} alt="" className='profpic' />
            <h1>Hi,Seyadu Raja</h1>
            <img src={taskimg} alt="" className='taskimg'/>

        </div>
        
        {/* rightcontent */}
        <div className='rightcontent'>

          {/* header */}
           <h1>My Tasks</h1>


           <div className='inputcontent'>
               <input type="text" placeholder='Enter the task here' />
               <button>Add</button>
           </div>

           <div className='tasklist'>
                <ul>
                    
                    <li>
                      <div className='taskcontent'>
                          <input type="radio" name="" id="" />
                          <span>Study for exam</span>
                          <button className='updatebutton'>UPD</button>
                          <button className='deletebutton'>DEL</button>
                      </div>
                    </li>
                  
                    
                </ul>
           </div>
        </div>
    </div>
  )
}

export default Content