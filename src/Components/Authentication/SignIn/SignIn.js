import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../Error';
import './SignIn.css'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email adress')
        .max(30, 'Must be shorter than 30')
        .required('required'),
    password: Yup.string()
        .min(6, 'Must be more than 6 letters')
        .required('required')
})


const SignIn = (props) => {

    const [errorMessage, setErrorMessage] = React.useState(null)

    const signIn = async (value) => {

        try {
            const fetchSignIn = await fetch('https://arcane-ravine-80165.herokuapp.com/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            const data = await fetchSignIn.json()
            if (data.error) {
                setErrorMessage(data.error)
            } else {
                console.log(data);
                localStorage.setItem('token', data.auth_token)
                props.history.push('/profile')
            }
        } catch (error) {
            setErrorMessage('something went wrong');
        }
    }

    return (
        <div className="sign">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)

                    signIn(values)
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
                        <div className="signin-form">
                            <form
                                onSubmit={handleSubmit}>
                                <div>
                                    <h2 style={{ color: "white" }}>Sign In</h2>

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
                                    <div className="form group" style={{ marginTop: "10px" }}>
                                        <button type='submit' class="btn btn-primary btn-sm">Sign In</button>
                                    </div>
                                    <h5 className="h5" style={{ marginTop: "10px" }}>Don't have an account?
                               <a style={{ color: "white" }} href="/SignUp"> Create!</a>
                                    </h5>
                                </div>
                                {errorMessage ? <p style={{ color: 'red' }}>{errorMessage}</p> : null}
                            </form>

                        </div>
                    )
                }}

            </Formik>

        </div>
    );

}

export default SignIn;