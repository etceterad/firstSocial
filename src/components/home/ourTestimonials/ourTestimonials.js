import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import TestimonialsImg from './01.jpg';

export default class OurTestimonials extends React.Component {
    render(){
        return(
            <section className="main-bg testimonial-content">
            <div className="container">

               <div className="row">
                  <div className="col-sm-12 text-center">
                     <div className="section-title">
                        <p className="mb-0 text-uppercase iq-fw-5 iq-ls-3  text-white">Testimonials</p>
                        <h2 className="title iq-fw-8 text-white">Client Feedback</h2>
                     </div>
                  </div>
               </div>
               <div className="row" >
                  <div className="col-sm-12">
                     <OwlCarousel className="owl-carousel" navText={['<i class="ion-arrow-left-c"></i>', '<i class="ion-arrow-right-c"></i>']} autoplay={false} loop={true} nav={true} dots={false} items="2" data-items-laptop="2" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1">
                        <div className="item">
                           <div className="testimonial-box white">
                              <img src={TestimonialsImg} className="img-fluid mb-3 img-shap" alt="" />
                              <p className="testimonial-info"> Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. </p>
                              <h6 className="mb-3">Nik Jorden</h6>
                              <span><strong className="text-black">CEO -</strong><span className="iq-fw-4 ml-0"> TikTokFans</span></span>
                           </div>
                        </div>
                        <div className="item">
                           <div className="testimonial-box white">
                              <img src={TestimonialsImg} className="img-fluid mb-3 img-shap" alt="" /> 
                              <p className="testimonial-info"> Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. </p>
                              <h6 className="mb-3">Kips Leo</h6>
                              <span><strong className="text-black">CEO -</strong><span className="iq-fw-4 ml-0"> TikTokFans</span></span>
                           </div>
                        </div>
                        <div className="item">
                           <div className="testimonial-box white">
                              <img src={TestimonialsImg} className="img-fluid mb-3 img-shap" alt="" />
                              <p className="testimonial-info"> Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. </p>
                              <h6 className="mb-3">Glen Jax </h6>
                              <span><strong className="text-black">CEO -</strong><span className="iq-fw-4 ml-0"> TikTokFans</span></span>
                           </div>
                        </div>
                        <div className="item">
                           <div className="testimonial-box white">
                              <img src={TestimonialsImg} className="img-fluid mb-3 img-shap" alt="" />
                              <p className="testimonial-info"> Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. </p>
                              <h6 className="mb-3">Larry Page</h6>
                              <span><strong className="text-black">CEO -</strong><span className="iq-fw-4 ml-0"> TikTokFans</span></span>
                           </div>
                        </div>
                        <div className="item">
                           <div className="testimonial-box white">
                              <img src={TestimonialsImg} className="img-fluid mb-3 img-shap" alt="" />
                              <p className="testimonial-info"> Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat. </p>
                              <h6 className="mb-3">JD Scot</h6>
                              <span><strong className="text-black">CEO -</strong><span className="iq-fw-4 ml-0"> TikTokFans</span></span>
                           </div>
                        </div>
                     </OwlCarousel>
                  </div>
               </div>
            </div>
         </section>
        )
    }
}