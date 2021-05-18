import React from 'react';
import {Link} from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const LoginMain = () =>  {

    const validation = yup.object().shape({
        email: yup.string().email('Input valid email').required('Required'),
        pass: yup.string().typeError('Must be string').required("Required")
    })

    return(
        <div className="login-info">
            <h2 className="iq-fw-9 mb-3">Login</h2>
            <h6>Welcome to <span className="main-color">TikTokFans</span> please login your account.</h6>
            <Formik
                initialValues={{
                    email: '',
                    pass: '',
                    check: false
                }}
                validateOnBlur
                onSubmit={values => console.log(values)}
                validationSchema={validation}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
                    <form>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className={touched.email ? errors.pass ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"} 
                                placeholder="Enter Email"
                                name="email" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className={touched.pass ? errors.pass ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"}
                                placeholder="Password"
                                name="pass"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pass} 
                            />
                        </div>
                        <div className="form-group form-check mb-4">
                            <label>
                                <Field 
                                    type="checkbox" 
                                    name="check"
                                />
                            </label>                           
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            <Link to="/password-reset" className="float-right iq-fw-6">Forgot Password</Link>
                        </div>
                        <button  
                            className="slide-button button mr-3 login-button" 
                            href="/login"
                            disabled={!isValid || !dirty || !values.check}
                        >
                            Login
                        </button>
                        <Link className="slide-button button bt-border" to="/register">
                            <div className="first">Register</div>
                            <div className="second">Register</div>
                        </Link>
                    </form>
                ) }
            </Formik>
        </div>
    )
}

export default LoginMain;