import React from 'react'
import Button from './Button'

const NoProjectSelected = () => {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src="/images/logo.png" alt="An empty task list" className='w-16 h-16 object-contain mx-auto' />
        <p className='text-xl font-bold text-stone-500 mt-4 my-4'>No Project Selected</p>
        <p className='text-stone-400 mb-4'>Select a project or get started  with a new one</p>
        <div className='mt-8'>
             <Button>
             Create new project
             </Button>
        </div>
    </div>
  )
}

export default NoProjectSelected