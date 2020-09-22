import React, { useState } from 'react';
import { Formik } from 'formik';
import './PostUpload.css'

const PostUpload = (props) => {

    return (
        <div className="postUpload">
            <Formik
                initialValues={{ title: '', text: '', imgUrl: '' }}

                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true)
                    props.postUpload(values)
                    resetForm()
                    setSubmitting(false)

                }}
            >
                {(
                    {
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }
                ) => {
                    return (
                        <div className="postUpload-form">

                            <form className="postUpload-modal-content" onSubmit={handleSubmit}>
                                <div className="postUpload-size">

                                    <h2 style={{ color: "white" }}>Create Post</h2>
                                    <div className="form group">
                                        <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'>Title</label><br />
                                        <input

                                            id='title'
                                            type='text'
                                            name='title'
                                            placeholder='Enter post title'
                                            value={values.title}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={'form-control'}
                                        />
                                    </div>

                                    <div className="form group">
                                        <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'>About</label><br />
                                        <input

                                            id='text'
                                            type='text'
                                            name='text'
                                            placeholder='about your post'
                                            value={values.text}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={'form-control'}
                                        />
                                    </div>

                                    <div className="form group">
                                        <label style={{ color: "white", marginTop: "10px" }} htmlFor='email'>Image</label><br />
                                        <input

                                            id='imgUrl'
                                            type='text'
                                            name='imgUrl'
                                            placeholder='Enter your image'
                                            value={values.imgUrl}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={'form-control'}
                                        />
                                    </div>

                                    <div className="form group" style={{ marginTop: "10px" }}>
                                        <button type='submit' class="btn btn-primary btn-sm">Post</button>
                                    </div>
                                    <br />
                                    {props.errorMessage ? <p style={{ color: 'red' }}>{props.errorMessage}</p> : null}
                                </div>
                            </form >

                        </div>
                    )
                }}

            </Formik>
        </div >
    );


}

export default PostUpload;