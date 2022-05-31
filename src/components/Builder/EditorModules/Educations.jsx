import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { useState } from "react";
import { AiOutlineBook , AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown , BiChevronUp } from "react-icons/bi";
import { useEditor } from "../../../context/EditorContext";
import * as Yup from "yup";

const EducationSchema = Yup.object().shape({
  name: Yup.string().required(),
  institute: Yup.string().required(),
  year_from: Yup.date(),
  year_to: Yup.date(),
});
const ArrayOfEducationsSchema = Yup.array().of(EducationSchema);

export function Educations() {
  const [show, setshow] = useState(false);
  const { editor, setEditor } = useEditor();

  // const handleSubmit = (values, actions) => {
  //   actions.setSubmitting(true);
  //   setEditor({
  //     ...editor,
  //     educations: values.educations,
  //   });
  //   actions.setSubmitting(false);
  // };

  const handleValues = (values) => {
    console.log(values.educations)
    console.log(editor)
    setEditor({
      ...editor,
      educations: values.educations,
    });
  };

  return (
    <div className="pb-4 mb-4 border-b">
      <div onClick={() => setshow(!show)} className="flex items-center justify-between">
      <h3
        className="font-bold text-base cursor-pointer p-2 flex gap-2 items-center"
      >
        Educations <AiOutlineBook />{" "}
      </h3>
      {show ? <BiChevronUp   />   : <BiChevronDown   />}
      </div>
      <div className={`option text-xs ${!show && "hidden"}`}>
        <Formik
          initialValues={{ educations: editor.educations }}
          validationSchema={ArrayOfEducationsSchema}
          // onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form onKeyUp={()=>handleValues(values)}>
              <FieldArray name="educations">
                {(arrayHelpers) => (
                  <div>
                    {values.educations &&
                    values.educations.length > 0 ? (
                      values.educations.map((cert, index) => (
                        <div className="py-2" key={index}>
                          {index === 0 && (
                            <AddEducationsButton push={arrayHelpers.push} />
                          )}
                          <GroupedInput
                            remove={arrayHelpers.remove}
                            index={index}
                          />
                        </div>
                      ))
                    ) : (
                      <div>
                        <AddEducationsButton push={arrayHelpers.push} />
                      </div>
                    )}
                  </div>
                )}
              </FieldArray>
              {/* <button
                type="submit"
                className="rounded bg-gradient-to-r mt-4 w-full from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm"
              >
                Update
              </button> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

function AddEducationsButton({ push }) {
  return (
    <button
      onClick={() =>
        push({
          name: "",
          institute: "",
          year_from: "",
          year_to: "",
        })
      }
      type="button"
      className="flex gap-2 items-center"
    >
      Add Educations <AiOutlinePlus />
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
        placeholder="Course Name"
        name={`educations.${index}.name`}
      />
      <ErrorMessage name={`educations.${index}.name`} />

      <Field
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="College/University Name"
        name={`educations.${index}.institute`}
      />
      <Field
        type="date"
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Year From"
        name={`educations.${index}.year_from`}
      />
      <Field
        type="date"
        className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
        placeholder="Year To"
        name={`educations.${index}.year_to`}
      />
      <ErrorMessage name={`educations.${index}.year`} />
    </div>
  );
}
