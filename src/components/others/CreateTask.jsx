import React, { useState } from 'react'

const CreateTask = () => {

const [taskTitle, setTaskTitle] = useState(' ')
const [taskDescription, setTaskDescription] = useState(' ')
const [taskDate, setTaskDate] = useState(' ')
const [assignTo, setAssignTo] = useState(' ')
const [Category, setCategory] = useState(' ')

const [task, setTask] = useState([])

  const submitHandler = (e) => {

    e.preventDefault();

    setTask({taskTitle,taskDescription,taskDate,Category, active:false,newTask:true, failed:true, completed:false})

    const data = localStorage.getItem('employees')

    console.log(data);
    
    

  // console.log(taskTitle,taskDate,taskTitle,taskDescription,assignTo);

  // setAssignTo("")
  // setCategory("")
  // setTaskDate("")
  // setTaskDescription("")
  // setTaskTitle("")
  
    
  }

  return (
    <>
         <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className="flex flex-wrap w-full  flex-start justify-between">
        <div className="w-1/2">
                <div >
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                <input
                value={taskTitle}
                onChange={(e) => {
                    setTaskTitle(e.target.value)
                }}
                  type="text" placeholder="Make s UI design" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                <input
                  value={taskDate}
                  onChange={(e) => {
                      setTaskDate(e.target.value)
                  }}
                    type="Date"  className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" />
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                <input
                  value={assignTo}
                  onChange={(e) => {
                      setAssignTo(e.target.value)
                  }}
                type="text" placeholder="Employe name" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"/>
                </div>
                <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                <input
                  value={Category}
                  onChange={(e) => {
                      setCategory(e.target.value)
                  }}
                type="text" placeholder="design, dev, etc" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" />
                </div>
                
        </div>
          
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5" >Description</h3>
            <textarea
             value={taskDescription}
             onChange={(e) => {
                 setTaskDescription(e.target.value)
             }}
            name="" id="" cols="30" rows="10" className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px]"></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full ">Create Task</button>
          </div>
         
            
        </form>
      </div>
    </>
  )
}

export default CreateTask
