import React from 'react';
import Accordeon from '../../accordeon';

export default class FaqMainContent extends React.Component {

    render() {
        return(
            <section className="iq-asked position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="section-title">
                            <p className="mt-2 text-uppercase  iq-fw-3 iq-ls-3">Faq</p>
                            <h2 className="title iq-fw-8">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Accordeon />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}