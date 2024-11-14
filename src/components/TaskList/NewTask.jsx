import React from 'react'

const NewTask = ({data}) => {
  return (
    <>
       <div className='flex-shrink-0 h-full w-[300px] bg-green-500 p-5 rounded-xl'>
                <div className="flex justify-between items-center ">
                        <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.categories}</h3>
                        <h4>{data.date}</h4>
                </div>
                <h3 className='mt-5 text-2xl font-semibold'>{data.title}</h3>
                <p className="text-sm mt-2">{data.description}</p>
                <div className='mt-4 '>
                        <button className='bg-red-500 py-1 px-2 rounded-sm w-full`'>Accept Task</button>
                </div>
      </div>

    </>
  )
}

export default NewTask
