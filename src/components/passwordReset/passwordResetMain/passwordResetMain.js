import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const PasswordResetMain = () => {
    const validation = yup.object().shape({
        email: yup.string().email('Input valid email').required('Required')
    })

    return(
        <div className="login-info">
            <h2 className="iq-fw-8 mb-3">Reset Password</h2>
            <h6>Please enter your email address to request a password reset.</h6>
            <Formik
                initialValues={{
                    email: ''
                }}
                validateOnBlur
                onSubmit={values => console.log(values)}
                validationSchema={validation}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <form>
                        <div className="form-group">
                        <input 
                            type="email" 
                            name="email"
                            className={touched.email ? errors.email ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email} 
                            placeholder="Email Address" 
                        />
                        </div>
                        <button 
                            className="slide-button button mr-3 login-button" 
                            onClick={handleSubmit}
                            disabled={!isValid && !dirty}
                        >
                            Reset Password
                        </button>
                    </form>
                )}
            </Formik>       
        </div>
    )
}

export default PasswordResetMain;