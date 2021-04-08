import React from 'react';

export default class ContactUsForm extends React.Component {
    render() {
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
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                            <input type="text" className="form-control contact-first-name"   placeholder="First Name" />
                            </div>
                            <div className="form-group">
                            <input type="text" className="form-control contact-phone"   placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                            <input type="email" className="form-control contact-email"   placeholder="Email" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                            <textarea className="form-control contact-message" placeholder="Type Your Requirement" ></textarea>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-12">
                    <a className="slide-button button contact-us-button" href=" ">
                        <div className="first">Submit</div>
                        <div className="second">Submit</div>
                    </a>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}