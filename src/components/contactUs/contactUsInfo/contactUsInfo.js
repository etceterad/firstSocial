import React from 'react';

export default class ContactUsInfo extends React.Component {
    render() {
        return(
            <section>
                <div class="container">
                <div class="row">
                    <div class="col-lg-12 ">
                    <div class="row">
                        <div class="col-lg-6 wow fadeInLeft">
                        <h2 class="title iq-fw-8">Get in Touch</h2>
                        <p>Progravida nibh vel velit auctor alinean sollicitudin, lorem quis bibendum auctor.</p>
                        <div class="iq-address mt-3">
                            <div class="media ">
                                <div class="mr-3 contact-icon float-left"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                                    <div class="media-body">
                                        <p>Carol J. Stephens 1635 Franklin, Montgomery,<br/><span class="iq-fw-5"> AL 36104 USA</span></p>
                                    </div>
                                </div>
                            <div class="media ">
                            <div class="mr-3 contact-icon float-left"><i class="fas fa-envelope "></i> </div>
                                <div class="media-body">
                                    <p class="iq-fw-5" >Mail@digitalmarketing.com</p>
                                </div>
                            </div>
                            <div class="media ">
                            <div class="mr-3 contact-icon float-left"><i class="fa fa-phone" ></i> </div>
                            <div class="media-body">
                                <p class="iq-fw-5">0 123 456 789</p>
                            </div>
                            </div>
                            <div class="social-media mt-4 ">
                                <ul class="social">
                                    <li><a href="##"><i class="fab fa-facebook-f "></i></a></li>
                                    <li><a href="##"><i class="fab fa-twitter "></i></a></li>
                                    <li><a href="##"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a href="##"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="##"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="##"><i class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-6 wow fadeInRight">
                            <iframe class="w-100 contact-ifream" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840289118572!2d144.95373631550405!3d-37.81720974201396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1543402448828"  allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}