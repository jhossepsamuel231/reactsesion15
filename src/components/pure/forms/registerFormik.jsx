import React from 'react';
import * as Yup from 'yup';
// Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import { ErrorMessage, Field, Form, Formik } from 'formik';
const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', //to confirm password
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/Admin')
                .required('Roles is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Passwords must match!'
                    )
                }).required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert('register user')
    }

    return (
        <>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                // *** Yup Validation schema ***
                validationSchema={registerSchema}
                // ** onSubmit Event **
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="Your Username" />
                        {/* Username Errors */}
                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage component='div' name="username" />
                            )
                        }

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

                        <label htmlFor="confirm">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        />

                        {/* Confirm Password Errors */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage component='div' name="confirm" />
                            )
                        }

                        <button type="submit">Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}

                    </Form>
                )}

            </Formik>
        </>
    );
}

export default RegisterFormik;
