import React from 'react'
import Container from './Container'
import { FcWorkflow , FcApproval , FcBullish , FcDataSheet } from "react-icons/fc"

function Benefits() {
  return (
    <div className='py-10'>
    <Container>
        <h1 className="text-3xl md:text-5xl font-bold pb-8 text-center">Benefits</h1>

        <section className='grid grid-cols-1 md:grid-cols-4 gap-8'>

          <div className='flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700 p-6 shadow-sm'>
            <h2 className='text-xl font-bold'>ATS Compliant</h2> 
            <FcApproval size={60} />
          </div>

          <div className='flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700 p-6 shadow-sm'>
            <h2 className='text-xl font-bold'>Proven</h2> 
            <FcBullish size={60} />
          </div>

          <div className='flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700 p-6 shadow-sm'>
            <h2 className='text-xl font-bold'>Intuitive</h2> 
            <FcWorkflow size={60} />
          </div>
          
          <div className='flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700 p-6 shadow-sm'>
            <h2 className='text-xl font-bold'>Simple</h2> 
            <FcDataSheet size={60} />
          </div>


        </section>

    </Container>
  </div>
  )
}

export default Benefits