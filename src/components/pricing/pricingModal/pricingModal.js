import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import PricingContainer from '../pricingContainer'
import './pricingModal.css';

const PricingModal = (props) => {
    const validation = yup.object().shape({
        name: yup.string().typeError('Must be string').required("Required"),
        email: yup.string().email('Input valid email').required('Required')
    })

    const {resetActive, active, name, price, swapperHandle, swapToPayment, amount} = props;

    return(
        <div className={active ? "modal active" : "modal"} onClick={resetActive} >
            <div className="purchase-popup" onClick={e => e.stopPropagation()}> 
                <div className="purchase-popup__form">
                    {swapToPayment ?
                        <PricingContainer amount={amount} resetActive={resetActive} name={name} />
                    :
                        <div>
                            <h2 className="purchase-popup__title">
                                You want to buy {name}? <br /> It will cost {price}$
                            </h2>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    check: false
                                }}
                                validateOnBlur
                                onSubmit={values => console.log(values)}
                                validationSchema={validation}
                            >
                                {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) =>(
                                    <form action="">
                                        <input 
                                            type="text" 
                                            className={touched.name ? errors.name ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"} 
                                            placeholder="Your name" 
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}  
                                        />
                                        <input 
                                            type="email" 
                                            className={touched.email ? errors.email ? "form-control contact-first-name touched-input" : "form-control contact-first-name" : "form-control contact-first-name"} 
                                            placeholder="Your Email" 
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email} 
                                        /><br />
                                        <label>
                                            <Field
                                                type="checkbox" 
                                                name="check"
                                                id="purchase-popup-checkbox"
                                            />
                                            <label 
                                                className="purchase-popup__form-label" 
                                                htmlFor="purchase-popup-checkbox"
                                            >
                                                I accept the user agreement
                                            </label><br />
                                        </label>
                                        <button 
                                            className="purchase-popup__form-button button"
                                            onClick={(e) => swapperHandle(e)}
                                            disabled={!isValid || !dirty || !values.check}
                                        >
                                            Purchase
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>   
                    }
                </div>
            </div>
        </div>
    )       
}

export default PricingModal;