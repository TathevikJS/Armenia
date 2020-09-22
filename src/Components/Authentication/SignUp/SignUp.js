import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../Error';
import './SignUp.css'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email adress')
        .max(30, 'Must be shorter than 30')
        .required('required'),
    password: Yup.string()
        .min(6, 'Must be more than 6 letters')
        .required('required'),
    lastname: Yup.string()
        .required('required'),
    avatar: Yup.string()
        .required('required'),
    firstname: Yup.string()
        .required('required')
}
)


const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState(null)

    const signUp = async (value) => {
        try {
            const fetchSignUp = await fetch('https://arcane-ravine-80165.herokuapp.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            const data = await fetchSignUp.json()
            if (data.error) {
                setErrorMessage(data.error)
            } else {
                console.log(data);
            }
        } catch (error) {
            setErrorMessage('something went wrong')
        }
    }


    return (
        <div className="SignUp">
            <Formik
                initialValues={{ email: '', password: '', firstname: '', lastname: '', avatar: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    signUp(values)
                    resetForm()
                    setSubmitting(false)

                }}
            >
                {(
                    {
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }
                ) => {
                    return (
                        <div className="signup-form">

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <h2 style={{ color: "white" }}>Sign Up</h2>



                                    <div className="form group">

                                        <div className="row">
                                            <div className="col-6">
                                                <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'> First Name</label><br />
                                                <input

                                                    id='firstname'
                                                    type='text'
                                                    name='firstname'
                                                    placeholder='Enter your name'
                                                    value={values.firstname}
                                                    className={touched.firstname && errors.firstname ? 'has-error form-control ' : 'form-control '}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}

                                                />

                                                <Error touched={touched.firstname} message={errors.firstname} />
                                            </div>

                                            <div className="col-6">
                                                <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'>Last Name</label><br />
                                                <input

                                                    id='lastname'
                                                    type='text'
                                                    name='lastname'
                                                    placeholder='Enter your lastname'
                                                    value={values.lastname}
                                                    className={touched.lastname && errors.lastname ? 'has-error form-control ' : 'form-control '}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}

                                                />

                                                <Error touched={touched.lastname} message={errors.lastname} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form group">
                                        <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'>Email</label><br />
                                        <input

                                            id='email'
                                            type='email'
                                            name='email'
                                            placeholder='Enter your email'
                                            value={values.email}
                                            className={touched.email && errors.email ? 'has-error form-control' : 'form-control'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}

                                        />

                                        <Error touched={touched.email} message={errors.email} />
                                    </div>

                                    <div className="form group">
                                        <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'>Password</label><br />
                                        <input
                                            id='password'
                                            type='password'
                                            name='password'
                                            placeholder='Enter your password'
                                            value={values.password}
                                            className={touched.password && errors.password ? 'has-error form-control' : 'form-control'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <Error touched={touched.password} message={errors.password} />

                                    </div>

                                    <div className="form group">
                                        <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'>Avatar</label><br />
                                        <input

                                            id='avatar'
                                            type='text'
                                            name='avatar'
                                            placeholder='Enter your avatar'
                                            value={values.avatar}
                                            className={touched.avatar && errors.avatar ? 'has-error form-control' : 'form-control'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}

                                        />

                                        <Error touched={touched.avatar} message={errors.avatar} />
                                    </div>

                                    <div className="form group" style={{ marginTop: "10px" }}>
                                        <button type='submit' class="btn btn-primary btn-sm">Sign Up</button>
                                    </div>
                                </div> <br />
                                {errorMessage ? <p style={{ color: 'red' }}>{errorMessage}</p> : null}
                            </form >

                        </div>
                    )
                }}

            </Formik>
        </div >
    );

}

export default SignUp;