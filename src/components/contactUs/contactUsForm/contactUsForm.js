import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function ContactUsForm() {
    const regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

    const validation = yup.object().shape({
        name: yup.string().typeError('Must be string').required("Required"),
        tel: yup.string().matches(regExp, "Invalid phone number"),
        email: yup.string().email('Input valid email').required('Required'),
        requirement: yup.string().typeError('Must be string').required("Required")
    })

    return(
        <section className="iq-contact-us pb-0">
            <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="section-title mb-4">
                    <h2 className="title iq-fw-8">Contact Form</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="project-form mb-3">
                    <Formik
                        initialValues={{
                            name: '',
                            tel: '',
                            email: '',
                            requirement: ''
                        }}
                        validateOnBlur
                        onSubmit={values => console.log(values)}
                        validationSchema={validation} 
                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
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
                                                type="tel" 
                                                className={touched.tel ? errors.tel ? "form-control contact-phone touched-input" : "form-control contact-phone" : "form-control contact-phone"} 
                                                placeholder="Phone Number"
                                                name="tel"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.tel}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                className={touched.email ? errors.email ? "form-control contact-email touched-input" : "form-control contact-email" : "form-control contact-email"} 
                                                placeholder="Email" 
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <textarea 
                                                className={touched.requirement ? errors.requirement ? "form-control contact-message touched-input" : "form-control contact-message" : "form-control contact-message"} 
                                                placeholder="Type Your Requirement" 
                                                name="requirement"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.requirement}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-12">
                                    <a
                                        role="button"
                                        className="slide-button button contact-us-button"
                                        onClick={handleSubmit}
                                        disabled={!isValid && !dirty}
                                        type="submit" 
                                        href=" "
                                    >
                                        <div className="first">Submit</div>
                                        <div className="second">Submit</div>
                                    </a>
                                </div>
                                </div>
                            </form>  
                        )}
                    </Formik>
                    </div>
                    </div>
                </div>       
                </div>
        </section>
    )
}