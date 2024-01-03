import React, { useState } from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

function Tasklist() {
    const tasks =useSelector(state=>state)
    console.log(tasks)
    const [iscomplete,setIscomplete] = useState(false)
    console.log(iscomplete)
  return (
    <div>
   <Button onClick={()=>setIscomplete(true)}>
          Done
   </Button>
   <Button onClick={()=>setIscomplete(false)}>
         Not Done
   </Button>
   { tasks.filter(e=>e.isdone===iscomplete).map(e => <Task task={e}/>)}
    </div>
  )
}

export default Tasklist