import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

const ManageAccountForm = () => {
    const validation = yup.object().shape({
        username: yup.string().typeError('Must be string').required("Required"),
        email: yup.string().email('Input valid email').required('Required'),
        currentPass: yup.string().typeError('Must be string').required("Required"),
        newPass: yup.string().typeError('Must be string').required("Required")
    })

    return(
        <Formik
            initialValues={{
                username: '',
                email: '',
                currentPass: '',
                newPass: ''
            }}
            validateOnBlur
            onSubmit={values => console.log(values)}
            validationSchema={validation}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
                <div>
                    <form className="main-manage__form">
                        <div className="main-manage__form-container">
                            <div className="main-manage__form-left">
                                <div className="main-manage__form-block">
                                    <h5 className="main-manage__form-label">
                                        Username
                                    </h5>
                                    <input 
                                        type="text" 
                                        className={touched.username ? errors.username ? "main-manage__form-input touched-input" : "main-manage__form-input" : "main-manage__form-input"} 
                                        placeholder="Username" 
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    /><br />
                                <button 
                                    type="submit" 
                                    className="button main-manage__btn" 
                                    onClick={handleSubmit}
                                    disabled={!isValid && !dirty}
                                >
                                    Save changes
                                </button>
                                </div>
                                <div className="main-manage__form-block">
                                    <h5 className="main-manage__form-label">
                                        Your Email
                                    </h5>
                                    <input
                                        type="email" 
                                        className={touched.email ? errors.email ? "main-manage__form-input touched-input" : "main-manage__form-input" : "main-manage__form-input"} 
                                        placeholder="Email" 
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </div>
                            </div>
                            <div className="main-manage__form-right">
                                <div className="main-manage__form-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat nisi fugit? Deserunt laborum, culpa fugit aspernatur eveniet repudiandae aperiam exercitationem tempora non similique dignissimos doloribus eos aut perferendis. Accusantium!
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default ManageAccountForm;