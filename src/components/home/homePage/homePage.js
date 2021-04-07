import React from 'react';
import OurSuccess from '../ourSuccess';
import OurAchievments from '../ourAchievments';
import OurServices from '../../ourServices';
import DoneProjects from '../doneProjects';
import OurTestimonials from '../ourTestimonials';
import Offer from '../offer';
import Header from '../../homeHeader';
import Footer from '../../homeFooter';

export default class HomePage extends React.Component {
    render() {
        return (
            <>
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