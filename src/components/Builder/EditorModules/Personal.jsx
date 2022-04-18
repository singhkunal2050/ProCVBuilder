import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { setPersonal } from '../../../redux/builderSlice';

const PersonalSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


export function Personal() {
    const dispatch = useDispatch()
    const personal = useSelector(state => state.personal)

    const handleSubmit = (values, actions) => {
        dispatch(setPersonal(values))
    }
    return (
        <div className='pb-4 mb-4 border-b'>
            <h3 className='font-bold text-xl cursor-pointer'>Personal</h3>
            <Formik
                initialValues={personal}
                validationSchema={PersonalSchema}
                onSubmit={handleSubmit}>
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div className="flex flex-col mb-2">
                            <Field name="firstName" type="text" placeholder="First name" className={`focus:outline-none border-b p-2 ${errors.firstName && touched.firstName ? 'is-invalid' : ''}`} />
                            {errors.firstName && touched.firstName && <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">{errors.firstName}</div>}
                        </div>
                        <div className="flex flex-col mb-2">
                            <Field name="lastName" type="text" placeholder="Last name" className={`focus:outline-none border-b p-2 ${errors.lastName && touched.lastName ? 'is-invalid' : ''}`} />
                            {errors.lastName && touched.lastName && <div className="invalid-feedback text-xs text-red-700 font-semibold my-1">{errors.lastName}</div>}
                        </div>
                        <div className="flex flex-col mb-2">
                            <Field name="email" type="text" placeholder="Email" className={`focus:outline-none border-b p-2 ${errors.email && touched.email ? 'is-invalid' : ''}`} />
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
