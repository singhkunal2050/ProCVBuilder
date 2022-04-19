import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEditor } from "../../../context/EditorContext";

const SkillsSchema = Yup.object().shape({
  skills: Yup.array().of(Yup.string().required("Required")),
});

export function Skills() {
  const { editor, setEditor } = useEditor();

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
      <h3 className="font-bold text-xl cursor-pointer p-2">Personal</h3>
      <Formik
        initialValues={{ skills: editor.skills }}
        validationSchema={SkillsSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <FieldArray name="skills">
              {(arrayHelpers) => (
                <div>
                  {values.skills && values.skills.length > 0 ? (
                    values.skills.map((friend, index) => (
                      <div key={index}>
                        <Field
                          name={`skills.${index}`}
                          className="dark:bg-slate-600 py-2 px-3 border-b-2 mb-2"
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          x
                        </button>
                        {index == 0 && (
                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Add a Skill
                    </button>
                  )}
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </div>
  );
}
