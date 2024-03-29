import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEditor } from "../../../context/EditorContext";
import { BiChevronDown , BiChevronUp } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineClose , AiOutlineTool } from "react-icons/ai";
import { useState } from "react";

const SkillsSchema = Yup.object().shape({
  skills: Yup.array().of(Yup.string().required("Required")),
});

export function Skills() {
  const { editor, setEditor } = useEditor();
  const [show, setshow] = useState(false);

  // const handleSubmit = (values, actions) => {
  //   actions.setSubmitting(true);
  //   console.log(values);

  //   setEditor({
  //     ...editor,
  //     skills: values.skills,
  //   });
  //   console.log(editor);
  //   actions.setSubmitting(false);
  // };

  const handleValues = (values) =>{
    let skills = values.skills.filter(skill=>skill.trim()!=="");
    // console.log(skills)
    setEditor({
      ...editor,
      skills: skills,
    });
  }

  const deleteAndUpdate = (arrayHelpers, index,values) =>{
    arrayHelpers.remove(index);
    handleValues(values)
  }
  
  return (
    <div className="pb-4 mb-4 border-b">
      <div onClick={() => setshow(!show)} className="flex items-center justify-between">
      
      <h3 className="font-bold text-base cursor-pointer p-2 flex gap-2 items-center" onClick={()=>setshow(!show)}>Skills <AiOutlineTool/> </h3>
      {show ? <BiChevronUp   />   : <BiChevronDown   />}
      </div>

      <div className={`option text-xs ${!show && "hidden"}`}>
        <Formik
          initialValues={{ skills: editor.skills }}
          validationSchema={SkillsSchema}
          // onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form onKeyUp={()=>handleValues(values)}>
              <FieldArray name="skills">
                {(arrayHelpers) => (
                  <div className="grid grid-cols-2">
                    {values.skills && values.skills.length > 0 ? (
                      values.skills.map((friend, index) => (
                        <div key={index} className="self-end">
                          {index === 0 && (
                            <button
                              type="button"
                              className="col-span-2 p-2 flex gap-2 items-center  "
                              onClick={() =>arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              Add Skill
                              <AiOutlinePlus />
                            </button>
                          )}

                          <div key={index} className="flex relative gap-2 items-center mr-6">
                              <Field
                                name={`skills.${index}`}
                                className="bg-slate-100 pr-7 border-b-slate-500 dark:bg-slate-600 max-w-[120px]  py-1 rounded-lg px-2 border-b-2 mb-2"
                              />
                              <button
                                className="absolute right-[-10px] top-[8px]"
                                type="button"
                                onClick={() => { deleteAndUpdate(arrayHelpers, index,values) }} // remove a friend from the list
                              >
                                <AiOutlineClose />
                              </button>
                            </div>
                        </div>
                      ))
                    ) : (
                      <button
                        type="button"
                        className="flex gap-2 items-center"
                        onClick={() => arrayHelpers.push("")}
                      >
                        Add a Skill <AiOutlinePlus />
                      </button>
                    )}
                    {/* <div className="flex flex-col mb-2 col-span-2 mt-2">
                      <button
                        type="submit"
                        className="rounded bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm"
                      >
                        Update
                      </button>
                    </div> */}
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
