import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import TestimonialsImg from './01.jpg';
import OurTestimonialsItem from './ourTestimonialsItem';

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
                     <OwlCarousel 
                        className="owl-carousel" 
                        navText={['<i class="ion-arrow-left-c"></i>', '<i class="ion-arrow-right-c"></i>']} 
                        autoplay={false} 
                        loop={true} 
                        nav={true} 
                        dots={false} 
                        items="2"
                        responsive={{
                           0:{
                              items:1
                           },
                           600:{
                              items:2
                           }
                        }} 
                     >
                        <OurTestimonialsItem 
                           testimonialsAuthor={"Nik Jorden"} 
                           testimonialsText={"Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat."}
                           testimonialsImg={TestimonialsImg}
                        />
                        <OurTestimonialsItem 
                           testimonialsAuthor={"Kips Leo"} 
                           testimonialsText={"Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat."}
                           testimonialsImg={TestimonialsImg}
                        />
                        <OurTestimonialsItem 
                           testimonialsAuthor={"Glen Jax"} 
                           testimonialsText={"Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat."}
                           testimonialsImg={TestimonialsImg}
                        />
                        <OurTestimonialsItem 
                           testimonialsAuthor={"Larry Page"} 
                           testimonialsText={"Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat."}
                           testimonialsImg={TestimonialsImg}
                        />
                        <OurTestimonialsItem 
                           testimonialsAuthor={"JD Scot"} 
                           testimonialsText={"Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat."}
                           testimonialsImg={TestimonialsImg}
                        />
                     </OwlCarousel>
                  </div>
               </div>
            </div>
         </section>
        )
    }
}