import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useEditor } from '../../../context/EditorContext';

const PersonalSchema = Yup.object().shape({
    firstname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


export function Personal() {
    const { editor, setEditor } = useEditor();

    const handleSubmit = (values, actions) => {
        actions.setSubmitting(true);
        setEditor({
            ...editor,
            personal: {
                ...editor.personal,
                ...values
            }
        })
        actions.setSubmitting(false);
    }
    return (
        <div className='pb-4 mb-4 border-b'>
            <h3 className='font-bold text-xl cursor-pointer'>Personal</h3>
            <Formik
                initialValues={editor.personal}
                validationSchema={PersonalSchema}
                onSubmit={handleSubmit}>
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="flex flex-col mb-2">
                            <Field name="firstname" type="text" placeholder="First name" className={`dark:bg-slate-600 focus:outline-none border-b p-2 ${errors.firstname && touched.firstname ? 'is-invalid' : ''}`} />
                            {errors.firstname && touched.firstname && <div className=" invalid-feedback text-xs text-red-700 font-semibold my-1">{errors.firstname}</div>}
                        </div>
                        <div className="flex flex-col mb-2">
                            <Field name="lastname" type="text" placeholder="Last name" className={`dark:bg-slate-600 Mikefocus:outline-none border-b p-2 ${errors.lastname && touched.lastname ? 'is-invalid' : ''}`} />
                            {errors.lastname && touched.lastname && <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">{errors.lastname}</div>}
                        </div>
                        <div className="flex flex-col mb-2">
                            <Field name="email" type="text" placeholder="Email" className={`dark:bg-slate-600 focus:outline-none border-b p-2 ${errors.email && touched.email ? 'is-invalid' : ''}`} />
                            {errors.email && touched.email && <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">{errors.email}</div>}
                        </div>
                        <div className="flex flex-col mb-2">
                            <button type="submit" className="rounded bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white p-2 font-semibold text-sm">Update</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
