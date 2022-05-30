import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { BiChevronDown , BiChevronUp } from "react-icons/bi";
import { useEditor } from "../../../context/EditorContext";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const PersonalSchema = Yup.object().shape({
  firstname: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  // .required("Required"),
  lastname: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  // .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().min(10, "Too Short!").max(18, "Too Long!"),
  // .required("Required"),
  website: Yup.string(),
  facebookLink: Yup.string(),
  twitterLink: Yup.string(),
  linkedinLink: Yup.string(),
  githubLink: Yup.string(),
});

export function Personal() {
  const { editor, setEditor } = useEditor();
  const [show, setshow] = useState(false);

  // const handleSubmit = (values, actions) => {
    // actions.setSubmitting(true);
    // setEditor({
    //   ...editor,
    //   personal: {
    //     ...editor.personal,
    //     ...values,
    //   },
    // });
    // actions.setSubmitting(false);
  // };

  const handleValues = (values) =>{
    setEditor({
      ...editor,
      personal: {
        ...editor.personal,
        ...values,
      },
    });
  }

  return (
    <div className="pb-4 mb-4 border-b">
      <div onClick={() => setshow(!show)} className="flex items-center justify-between">
      <h3
        className="font-bold text-base cursor-pointer p-2 flex gap-2 items-center">
        Personal <AiOutlineUser />
      </h3>
      {show ? <BiChevronUp   />   : <BiChevronDown   />}
      </div>

      <div className={`option text-xs ${!show && "hidden"}`}>
        <Formik
          initialValues={editor.personal}
          validationSchema={PersonalSchema}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Form  onKeyUp={()=>handleValues(values)}>
              <div className="flex flex-col mb-2">
                <Field
                  name="firstname"
                  type="text"
                  placeholder="First name"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.firstname && touched.firstname ? "is-invalid" : ""
                  }`}
                />
                {errors.firstname && touched.firstname && (
                  <div className=" invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.firstname}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-2">
                <Field
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 Mikefocus:outline-none border-b p-2 ${
                    errors.lastname && touched.lastname ? "is-invalid" : ""
                  }`}
                />
                {errors.lastname && touched.lastname && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.lastname}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-2">
                <Field
                  name="email"
                  type="text"
                  placeholder="Email"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.email && touched.email ? "is-invalid" : ""
                  }`}
                />
                {errors.email && touched.email && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-2">
                <Field
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.phone && touched.phone ? "is-invalid" : ""
                  }`}
                />
                {errors.phone && touched.phone && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className="flex flex-col mb-2">
                <Field
                  name="designation"
                  type="text"
                  placeholder="Designation"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.designation && touched.designation
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {errors.designation && touched.designation && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.designation}
                  </div>
                )}
              </div>

              <div className="flex flex-col mb-2">
                <Field
                  name="city"
                  type="text"
                  placeholder="City"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.city && touched.city ? "is-invalid" : ""
                  }`}
                />
                {errors.city && touched.city && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.city}
                  </div>
                )}
              </div>

              <div className="flex flex-col mb-2">
                <Field
                  name="website"
                  type="text"
                  placeholder="website"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.website && touched.website ? "is-invalid" : ""
                  }`}
                />
                {errors.website && touched.website && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.website}
                  </div>
                )}
              </div>

              <div className="flex flex-col mb-2">
                <Field
                  name="linkedinLink"
                  type="text"
                  placeholder="linkedinLink"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.linkedinLink && touched.linkedinLink
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {errors.linkedinLink && touched.linkedinLink && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.linkedinLink}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-2">
                <Field
                  name="facebookLink"
                  type="text"
                  placeholder="facebookLink"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.facebookLink && touched.facebookLink
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {errors.facebookLink && touched.facebookLink && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.facebookLink}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-2">
                <Field
                  name="twitterLink"
                  type="text"
                  placeholder="twitterLink"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.twitterLink && touched.twitterLink
                      ? "is-invalid"
                      : ""
                  }`}
                />
                {errors.twitterLink && touched.twitterLink && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.twitterLink}
                  </div>
                )}
              </div>
              <div className="flex flex-col mb-2">
                <Field
                  name="githubLink"
                  type="text"
                  placeholder="githubLink"
                  className={`bg-slate-100 border-b-slate-500 dark:bg-slate-600 focus:outline-none border-b p-2 ${
                    errors.githubLink && touched.githubLink ? "is-invalid" : ""
                  }`}
                />
                {errors.githubLink && touched.githubLink && (
                  <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">
                    {errors.githubLink}
                  </div>
                )}
              </div>

              {/* <div className="flex flex-col mb-2">
                <button
                  type="submit"
                  className="rounded bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm"
                >
                  Update
                </button>
              </div> */}
            </Form>
          )}
        </Formik>
      </div>
      


    </div>
  );
}
