import React from 'react';
import {Link} from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

const RegisterMain = () => {
  const validation = yup.object().shape({
    name: yup.string().typeError('Must be string').required("Required"),
    email: yup.string().email('Input valid email').required("Required"),
    pass: yup.string().typeError('Must be string').required("Required"),
    confirmPass: yup.string().oneOf([yup.ref('pass')], 'Confirm Your password').required("Required")
  })
  
  return(
      <div className="login-info">
        <h2 className="iq-fw-8 mb-3">Register</h2>
        <h6>Welcome to <span className="main-color">TikTokFans</span> please Register your account.</h6>
        <Formik
          initialValues={{
            name: '',
            email: '',
            pass: '',
            check: false,
            confirmPass: ''
          }}
          validateOnBlur
          onSubmit={values => console.log(values)}
          validationSchema={validation} 
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <form>
              <div className="form-group">
                <input 
                  type="text" 
                  className={touched.name ? errors.name ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"} 
                  placeholder="First Name" 
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  className={touched.email ? errors.email ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"} 
                  placeholder="Your Email" 
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
              <div className="form-group">
                <input 
                  type="password" 
                  className={touched.confirmPass ? errors.confirmPass ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"} 
                  placeholder="Confirm Password" 
                  name="confirmPass"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPass} 
                />
              </div>
              <div className="form-group form-check mb-4">
                <label style={{display: 'flex'}}>
                  <Field 
                    type="checkbox" 
                    name="check" 
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">By Clicking register, you agree on our term and condition</label>
                </label>
              </div>
              <button 
                className="slide-button button mr-3 login-button"
                onClick={handleSubmit} 
                disabled={!isValid || !dirty || !values.check}
              >
                Register
              </button>
              <Link className="slide-button button bt-border" to="/login">
                <div className="first">Login</div>
                <div className="second">Login</div>
              </Link>
            </form>
          )}
        </Formik>
    </div>
  )
}

export default RegisterMain;