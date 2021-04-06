import React from 'react';
import OurSuccess from '../ourSuccess';
import OurAchievments from '../ourAchievments';
import OurServices from '../ourServices';
import DoneProjects from '../doneProjects';
import OurTestimonials from '../ourTestimonials';


const MainContent = () => {
    return(
        <div className="main-content">
            <OurSuccess />
            <OurAchievments />
            <OurServices />
            <DoneProjects />
            <OurTestimonials />
        </div>
    )
}


export default MainContent;