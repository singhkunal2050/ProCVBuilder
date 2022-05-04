import React from 'react'
import Container from "../components/Container"
import template1 from '../assets/resumes/template1.jpg'
import template2 from '../assets/resumes/template2.jpg'
import template3 from '../assets/resumes/template6.jpg'
import { useNavigate } from "react-router-dom";
import { useEditor } from '../context/EditorContext'

function Templates() {

  let { setLayout } = useEditor()
  
  let navigate  = useNavigate();
  function openCurrentTemplate(e){
    setLayout(e.target.closest('article').dataset.template);
    navigate("/builder");
  }
  

  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold py-4 text-center">
          Templates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <article data-template="L1" className='border-2 shadow-lg p-2 cursor-pointer ' onClick={openCurrentTemplate}>
            <img src={template1} alt="Template1" />
            <h5 className='text-lg'>L1</h5>
          </article>

          <article data-template="L2" className='border-2 shadow-lg p-2 cursor-pointer '  onClick={openCurrentTemplate}>
              <img src={template2} alt="Template2" />
              <h5 className='text-lg'>L2</h5>
          </article>

          {/* <article data-template="L3" className='border-2 shadow-lg p-2'  onClick={openCurrentTemplate}>
            <img src={template3} alt="Template3" />
            <h5 className='text-lg'>L3</h5>
          </article> */}




        </div>


      </Container>
    </div>
  )
}

export default Templates