import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: '',
    }

    return (
        <>
            <h4>Login Formik</h4>
            <Formik
                // ***Initial values that the form will take***
                initialValues={initialCredentials}
                // *** Yup Validation schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event **
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save the data in the localStorage
                    localStorage.setItem('credentials', values)
                }}>

                {/* We obtain props form Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage component='div' name="email" />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage component='div' name="password" />
                            )
                        }

                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}

            </Formik>
        </>
    );
}

export default LoginFormik;
