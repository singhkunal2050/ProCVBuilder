import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import { useState } from "react";
import { AiOutlineTrophy } from "react-icons/ai";
import { useEditor } from "../../../context/EditorContext";
import * as Yup from "yup";

const CertificationSchema = Yup.object().shape({
  name: Yup.string().required(),
  institute: Yup.string().required(),
  year: Yup.number().required().positive().integer().min(2000).max(2022),
});
const ArrayOfCertificationsSchema = Yup.array().of(CertificationSchema);
console.log(ArrayOfCertificationsSchema);

function Certifications() {
  const [show, setshow] = useState(true);
  const { editor, setEditor } = useEditor();

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    console.log(values.certifications);
    actions.setSubmitting(false);
  };

  return (
    <div className="pb-4 mb-4 border-b">
      <h3
        className="font-bold text-xl cursor-pointer p-2 flex gap-2 items-center"
        onClick={() => setshow(!show)}
      >
        Certifications <AiOutlineTrophy />{" "}
      </h3>
      <div className={`option ${!show && "hidden"}`}>
        <Formik
          initialValues={{ certifications: editor.certifications }}
          validationSchema={ArrayOfCertificationsSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form>
              <FieldArray name="certifications">
                {(arrayHelpers) => (
                  <div>
                    {values.certifications &&
                    values.certifications.length > 0 ? (
                      values.certifications.map((cert, index) => {
                        return (
                          <div className="py-2" key={index}>
                            {index === 0 && (
                              <button
                                onClick={() =>
                                  arrayHelpers.push({
                                    name: "",
                                    institute: "",
                                    year: "",
                                  })
                                }
                                type="button"
                                className="bg-green-500 p-1 font-semibold"
                              >
                                Add
                              </button>
                            )}

                            <Field
                              className=" bg-slate-100 border-b-slate-500 mt-2  dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
                              placeholder="Certification Name"
                              name={`certifications.${index}.name`}
                            />
                            <ErrorMessage
                              name={`certifications.${index}.name`}
                            />

                            <Field
                              className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
                              placeholder="Institute"
                              name={`certifications.${index}.institute`}
                            />
                            <Field
                              className="bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 w-full "
                              placeholder="Year"
                              name={`certifications.${index}.year`}
                            />
                            <ErrorMessage
                              name={`certifications.${index}.year`}
                            />
                            <button
                              type="button"
                              className="bg-red-500 p-1 font-semibold"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              Remove
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              name: "",
                              institute: "",
                              year: "",
                            })
                          }
                          className="bg-green-500 p-1 font-semibold"
                        >
                          Add
                        </button>
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

export default Certifications;
