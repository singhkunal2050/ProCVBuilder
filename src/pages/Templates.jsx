import React from 'react'
import Container from "../components/Container"
// import template1 from '../assets/resumes/template1.jpg'
// import template2 from '../assets/resumes/template2.jpg'
// import template3 from '../assets/resumes/template6.jpg'
import { useNavigate } from "react-router-dom";
import { useEditor , layoutCollection} from '../context/EditorContext'


function Templates() {

  console.log(layoutCollection)

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

          {layoutCollection.map((layout, index) => (
            <article key={index} data-template={layout.name}  className='border-2 shadow-lg p-2 cursor-pointer ' onClick={openCurrentTemplate}>
              <img src={`//source.unsplash.com/500x50${index}?random`} alt={layout.name} />
              <h5 className='text-lg'>{layout.name}</h5>
             </article>  
          ))}

        </div>


      </Container>
    </div>
  )
}

export default Templates