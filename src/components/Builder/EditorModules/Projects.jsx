import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { CgWorkAlt } from "react-icons/cg";
import { useEditor } from "../../../context/EditorContext";
import * as Yup from "yup";

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

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    setEditor({
      ...editor,
      projects: values.projects,
    });
    actions.setSubmitting(false);
  };

  return (
    <div className="pb-4 mb-4 border-b">
      <h3
        className="font-bold text-xl cursor-pointer p-2 flex gap-2 items-center"
        onClick={() => setshow(!show)}
      >
        Projects <CgWorkAlt />{" "}
      </h3>
      <div className={`option ${!show && "hidden"}`}>
        <Formik
          initialValues={{ projects: editor.projects }}
          validationSchema={ArrayOfProjectsSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form>
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
              <button
                type="submit"
                className="rounded bg-gradient-to-r mt-4 w-full from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm"
              >
                Update
              </button>
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
          institute: "",
          year: "",
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
      <button type="button" className="bg-red-800 p-1 ml-auto" onClick={() => remove(index)}>
        <AiOutlineClose />
      </button>
      <Field
        className=" bg-slate-100 border-b-slate-500 mt-2  dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Course Name"
        name={`projects.${index}.name`}
      />
      <Field
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="College/University Name"
        name={`projects.${index}.stack`}
      />
      <Field
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Year From"
        name={`projects.${index}.from`}
      />
      <Field
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Year To"
        name={`projects.${index}.to`}
      />
      {/* <Field
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Highlights"
        name={`projects.${index}.hightlights`}
      /> */}
    </div>
  );
}
