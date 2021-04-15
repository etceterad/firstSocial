import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class PortfolioGridItem extends React.Component {
    render() {
        const {gridItemImg} = this.props;
        
        return(
            <Grid item xs={12} sm={4} lg={4} xl={4} className="iq-grid-item creative wow fadeInUp">
                <div className="iq-portfolio">
                    <img src={gridItemImg} className="img-fluid" alt="portfolio" />
                    <div className="portfolio-info">
                    <a href=" "><span className="text-black">Design Concept</span></a>
                    <a href=" " className="text-uppercase text-gray float-right">Design</a>
                    </div>
                </div>
            </Grid>
        )
    }
}