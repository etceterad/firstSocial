import React from 'react';
import OurSuccess from '../ourSuccess';
import OurAchievments from '../ourAchievments';
import OurServices from '../../ourServices';
import DoneProjects from '../doneProjects';
import DoneProjectsSlider from '../doneProjectsSlider';
// import DoneProjects from '../doneProjects';
import WOW from 'wowjs';
import OurTestimonials from '../ourTestimonials';
import Offer from '../offer';
import Header from '../../homeHeader';
import Footer from '../../homeFooter';
import Preloader from '../../preloader';

export default class HomePage extends React.Component {
    
    componentDidMount() {
        setTimeout(() =>{
            new WOW.WOW({
                live: false
            }).init();
        }, 500)

    }

    render() {
        return (
            <>
                <Preloader />
                <Header />
                <Offer />
                <div className="main-content">
                    <OurSuccess />
                    <OurAchievments />
                    <OurServices />
                    <DoneProjects />
                    <OurTestimonials />
                </div>
                <Footer />
            </>
        )
    }
} 