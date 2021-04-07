import React from 'react';
import InfoImg from './2.jpg';

export default class AboutUsInfo extends React.Component {
    render() {
        return (
            <section className="iq-solutions pt-0">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6 align-self-center wow fadeInRight">
                            <h2 className="iq-fw-8 mb-2">Who We are</h2>
                            <p className="mb-3">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis bibendum auctor. Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis bibendum auctor.</p>
                            <p className="mb-3">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src={InfoImg} className="img-fluid wow fadeInLeft" alt="info" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}