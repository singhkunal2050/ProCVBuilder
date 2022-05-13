import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditor, layoutCollection } from "../../context/EditorContext";

function TemplateSidebar() {
  const [open, setOpen] = useState(true);

  let { setLayout } = useEditor();

  let navigate = useNavigate();
  function openCurrentTemplate(e) {
    let {name , template , thumbnail} = e.target.closest("article").dataset
    console.log(name , template , thumbnail)
    setLayout({name:name , template:template , thumbnail:thumbnail});
    // navigate("/builder");
  }

  return (
    <section
      className={`fixed top-[72px] right-0 min-h-screen w-[300px] dark:bg-slate-700 bg-white z-10 border-l-2 transition-all duration-300 ${
        open ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <button
        className={`fixed right-full z-20 dark:bg-slate-700 bg-white top-48 p-1 font-xl transition-all duration-300 border-2 border-r-0`}
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={` ${open ? 'rotate-180' : 'rotate-0'} h-5 w-5 `}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="p-4 max-h-screen  overflow-y-auto ">
        <h4>Available Templates</h4>
        <div className="grid grid-cols-2 md">
          {layoutCollection.map((layout, index) => (
            <article
              key={index}
              data-template={layout.template}
              data-name={layout.name}
              data-thumbnail={layout.thumbnail}
              className="shadow-lg p-2 cursor-pointer "
              onClick={openCurrentTemplate}
            >
              <img src={layout.thumbnail} alt={layout.name} />
              <h5 className="text-xs mt-3">{layout.name}</h5>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TemplateSidebar;
