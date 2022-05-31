import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { BiChevronDown , BiChevronUp } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";
import { useEditor } from "../../../context/EditorContext";
import * as Yup from "yup";
// import RichTextArea from './RichTextArea'

const ProjectSchema = Yup.object().shape({
  name: Yup.string().required(),
  stack: Yup.string().required(),
  from: Yup.string().required(),
  to: Yup.string().required(),
  highlights : Yup.string().required(),
});
const ArrayOfProjectsSchema = Yup.array().of(ProjectSchema);

export function Projects() {
  const [show, setshow] = useState(false);
  const { editor, setEditor } = useEditor();


  // const handleSubmit = (values, actions) => {
  //   actions.setSubmitting(true);
  //   setEditor({
  //     ...editor,
  //     projects: values.projects,
  //   });
  //   actions.setSubmitting(false);
  // };

  const handleValues = (values) => {
    // console.log(values)
    setEditor({
      ...editor,
      projects: values.projects,
    });
  }

  return (
    <div className="pb-4 mb-4 border-b">
      <div onClick={() => setshow(!show)} className="flex items-center justify-between">
      
      <h3
        className="font-bold text-base cursor-pointer p-2 flex gap-2 items-center" >
        Projects <CgWorkAlt />{" "}
      </h3>
      {show ? <BiChevronUp   />   : <BiChevronDown   />}
      </div>

      <div className={`option text-xs ${!show && "hidden"}`}>
        <Formik
          initialValues={{ projects: editor.projects }}
          validationSchema={ArrayOfProjectsSchema}
          // onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form onKeyUp={()=>handleValues(values)} onMouseDown={()=>handleValues(values)}>
              <FieldArray name="projects">
                {(arrayHelpers) => (
                  <div>
                    {values.projects &&
                    values.projects.length > 0 ? (
                      values.projects.map((cert, index) => (
                        <div className="py-2" key={index}>
                          {index === 0 && (
                            <AddProjectsButton push={arrayHelpers.push} />
                          )}
                          <GroupedInput
                            remove={arrayHelpers.remove}
                            index={index}
                          />
                        </div>
                        
                      ))
                    ) : (
                      <div>
                        <AddProjectsButton push={arrayHelpers.push} />
                      </div>
                    )}
                  </div>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

function AddProjectsButton({ push }) {
  return (
    <button
      onClick={() =>
        push({
          name: "",
          stack: "",
          from: "",
          to: "",
          hightlights: "",
        })
      }
      type="button"
      className="flex gap-2 items-center"
    >
      Add Projects <AiOutlinePlus />
    </button>
  );
}

function GroupedInput({ remove, index }) {
  return (
    <div className="p-2 mt-2 bg-slate-200 dark:bg-gray-800 flex flex-col">
      <button type="button" className="p-1 ml-auto" onClick={() => remove(index)}>
        <AiOutlineClose />
      </button>
      <Field
        className=" bg-slate-100 border-b-slate-500 mt-2  dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Project Name"
        name={`projects.${index}.name`}
      />
      <Field
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Stack"
        name={`projects.${index}.stack`}
      />
      <Field
        type="date"
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Year From"
        name={`projects.${index}.from`}
      />
      <Field
          type="date"
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Year To"
        name={`projects.${index}.to`}
      />
      <Field
        as="textarea"
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full min-h-[150px] "
        placeholder="Highlights"
        name={`projects.${index}.hightlights`}
      />
      {/* <RichTextArea/> */}
    
    </div>
  );
}
