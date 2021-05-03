import React from 'react';

export default class OurTestimonialsItem extends React.Component {
    render() {
        const {testimonialsText, testimonialsAuthor, testimonialsImg} = this.props;

        return(
            <div className="item">
                <div className="testimonial-box white">
                    <img src={testimonialsImg} className="img-fluid mb-3 img-shap" alt="" />
                    <p className="testimonial-info"> {testimonialsText} </p>
                    <h6 className="mb-3">{testimonialsAuthor}</h6>
                    <span><strong className="text-black">CEO -</strong><span className="iq-fw-4 ml-0"> TikTokFans</span></span>
                </div>
            </div>
        )
    }
}