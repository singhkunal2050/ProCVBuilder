import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEditor } from "../../../context/EditorContext";
import { AiOutlinePlus, AiOutlineClose , AiOutlineTool } from "react-icons/ai";
import { useState } from "react";

const SkillsSchema = Yup.object().shape({
  skills: Yup.array().of(Yup.string().required("Required")),
});

export function Skills() {
  const { editor, setEditor } = useEditor();
  const [show, setshow] = useState(true);

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    console.log(values);

    setEditor({
      ...editor,
      skills: values.skills,
    });
    console.log(editor);
    actions.setSubmitting(false);
  };
  return (
    <div className="pb-4 mb-4 border-b">
      <h3 className="font-bold text-xl cursor-pointer p-2 flex gap-2 items-center" onClick={()=>setshow(!show)}>Skills <AiOutlineTool/> </h3>
      <div className={`option ${!show && "hidden"}`}>
        <Formik
          initialValues={{ skills: editor.skills }}
          validationSchema={SkillsSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form>
              <FieldArray name="skills">
                {(arrayHelpers) => (
                  <div className="grid grid-cols-2">
                    {values.skills && values.skills.length > 0 ? (
                      values.skills.map((friend, index) => (
                        <div key={index}>
                          {index === 0 && (
                            <button
                              type="button"
                              className="col-span-2 p-2 flex gap-2 items-center  "
                              onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              Add Skill
                              <AiOutlinePlus />
                            </button>
                          )}

                          <div key={index} className="flex gap-2 items-center">
                            <Field
                              name={`skills.${index}`}
                              className="dark:bg-slate-600 max-w-[120px]  py-1 rounded-lg px-2 border-b-2 mb-2"
                            />
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
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
                    <div className="flex flex-col mb-2 col-span-2 mt-2">
                      <button
                        type="submit"
                        className="rounded bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm"
                      >
                        Update
                      </button>
                    </div>
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
