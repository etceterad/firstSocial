import React from 'react';

export default class DoneProjectsItem extends React.Component {
    render() {
        const {projectsItemImg} = this.props;

        return (
            <div className="item">
                <div className="iq-portfolio">
                    <img src={projectsItemImg} className="img-fluid" alt="projects" />
                    <div className="portfolio-info">
                        <a href=" "><span className="text-black">Design Concept</span></a>
                        <a href=" " className="text-uppercase text-gray float-right">Design</a>
                    </div>
                </div>
            </div>
        )
    }
} 