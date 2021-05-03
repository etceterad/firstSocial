import React from 'react';

export default class DoneProjectsSliderItem extends React.Component {
    render() {
        const {img} = this.props;

        return(
            <div className="iq-masonry-item item creative">
                <div className="iq-portfolio">
                    <img src={img} className="img-fluid" alt="done project" />
                    <div className="portfolio-info">
                        <a href=" "><span className="text-black">Design Concept</span></a>
                        <a href=" " className="text-uppercase text-gray float-right">Design</a>
                    </div>
                </div>
            </div>
        )
    }
}