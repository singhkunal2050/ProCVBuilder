import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useEditor } from "../../../context/EditorContext";

const SkillsSchema = Yup.object().shape({
  list: Yup.array().of(Yup.string()),
});

export function Skills() {
  const { editor, setEditor } = useEditor();
 
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    console.log(values)
    setEditor({
      ...editor,
      skills: [ ...editor.skills ]
    });
    actions.setSubmitting(false);
  };
 
  return (
    <div>
      <h3 className="font-bold text-xl cursor-pointer p-2">Skills</h3>

      <Formik
        initialValues={editor.skills}
        validationSchema={SkillsSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>

            <div className="flex flex-col mb-2">
              <Field
                name="skills"
                type="text"
                placeholder="First name"
                className={`dark:bg-slate-600 focus:outline-none border-b p-2 ${
                  errors.skills && touched.skills ? "is-invalid" : ""
                }`}
              />
              {errors.skills && touched.skills && (
                <div className=" invalid-feedback text-xs text-red-700 font-semibold my-1">
                  {errors.skills}
                </div>
              )}
            </div>

            <div className="flex flex-col mb-2">
              <button
                type="submit"
                className="rounded bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm"
              >
                Update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
