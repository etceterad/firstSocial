import React from 'react';
import SolutionsImg from './1.jpg';

export default class ServicesSolutions extends React.Component {
   constructor() {
      super() 

      this.state = {
         isMobile: true
      }
   }

   componentDidMount() {
      window.addEventListener('resize', () => {
         this.setState({
             isMobile: window.innerWidth < 1020
         });
     }, false);
   }

    render() {
        return (
            <section className="iq-solutions position-relative pt-0">
            <div className="container">
               <div className="row no-gutters">
                  <div className={this.state.isMobile ? "col-lg-6 align-self-center wow fadeInUp" : "col-lg-6 align-self-center wow fadeInLeft"}>
                     <h2 className="iq-fw-8 mb-2">Our Best Marketing Solutions</h2>
                     <p className="mb-3">Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,Lorem Ipsum.lorem quis bibendum auctor.</p>
                    <ul className="listing-mark">
                                <li>Simply dummy text of the Lorem Ipsum is printing.</li>
                                <li>Dummy text of the printing and typesetting industry.</li>
                                <li>Text of the printing and typesetting industry.</li>
                                <li>Ipsum has been the industry's standard dummy. </li>
                            </ul>
                  </div>
                  <div className={this.state.isMobile ? "col-lg-6 wow fadeInUp" : "col-lg-6 wow fadeInRight"}>
                     <img src={SolutionsImg} className="img-fluid" alt="" />
                  </div>
               </div>
            </div>
         </section>
        )
    }
}