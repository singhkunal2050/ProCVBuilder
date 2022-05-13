import React from 'react'
import Container from "../components/Container"
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
        <h1 className="text-3xl md:text-5xl font-bold py-8 text-center">
          Templates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {layoutCollection.map((layout, index) => (
            <article key={index} data-template={layout.name}  className='border-2 shadow-lg p-2 cursor-pointer ' onClick={openCurrentTemplate}>
              <img src={layout.thumbnail} alt={layout.name} />
              <h5 className='text-lg'>{layout.name}</h5>
             </article>  
          ))}

        </div>


      </Container>
    </div>
  )
}

export default Templates