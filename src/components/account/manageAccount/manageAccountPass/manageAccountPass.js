import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

const ManageAccountPass = () => {
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
                        <div className="main-manage__form-reset">
                            <div className="main-manage__form-container">
                                <div className="main-reset__form-left">
                                    <form action="">
                                        <h5 className="main-manage__form-label">
                                            Change Your password
                                        </h5>
                                        <input 
                                            type="password" 
                                            className={touched.currentPass ? errors.currentPass ? "main-manage__form-input touched-input" : "main-manage__form-input" : "main-manage__form-input"} 
                                            placeholder="Password" 
                                            name="currentPass"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.currentPass}
                                        />
                                        <input 
                                            type="password" 
                                            className={touched.newPass ? errors.newPass ? "main-manage__form-input touched-input" : "main-manage__form-input" : "main-manage__form-input"} 
                                            placeholder=" New Password" 
                                            name="newPass"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.newPass}
                                        /><br />
                                        <button 
                                            type="submit" 
                                            className="button main-reset__btn"
                                            onClick={handleSubmit} 
                                            disabled={!isValid && !dirty}
                                        >
                                            Save changes
                                        </button>
                                    </form>
                                </div>
                                <div className="main-reset__form-right">
                                    <div className="main-manage__form-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat nisi fugit? Deserunt laborum, culpa fugit aspernatur eveniet repudiandae aperiam exercitationem tempora non similique dignissimos doloribus eos aut perferendis. Accusantium!
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) }
                    </Formik>
    )
}

export default ManageAccountPass;