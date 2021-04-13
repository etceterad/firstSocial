import React from 'react';
import OurSuccessImg from './2.jpg';

export default class OurSucces extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         isMobile: true
      }
   } 

   componentDidMount(){
      window.addEventListener('resize', () => {
         this.setState({
             isMobile: window.innerWidth < 1020
         });
     }, false);
   }
   
    render() {
        return (
            <section className="iq-choose-info position-relative">
            <div className="container">
               <div className="row flex-row-reverse align-items-center h-100 our-success">

                  <div className={this.state.isMobile ? "col-lg-6 align-self-center wow fadeInUp" : "col-lg-6 align-self-center wow fadeInRight"} >
                     <p className="text-uppercase  iq-fw-3 iq-ls-3">Our Success</p>
                     <h2 className="iq-fw-8 mb-2">The Secrets to Successful About TikTokFans</h2>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                     <div className="mt-3 d-inline-block">
                        <a className="slide-button button float-left" href="about-us.html">
                           <div className="first">Explore More </div>
                           <div className="second">Explore More </div>
                        </a>

                        <a href="https://www.youtube.com/watch?v=0O2aH4XLbto" className="video-play popup-youtube float-left ml-3"><i className="fas fa-play"></i></a>
                     </div>
                  </div>
                  <div className="col-lg-6 iq-rmt-40">
                     <img src={OurSuccessImg} className={this.state.isMobile ? "img-fluid wow fadeInUp" : "img-fluid wow fadeInLeft"} alt="our success" />
                  </div>
               </div>
            </div>
         </section>
        )
    }
}