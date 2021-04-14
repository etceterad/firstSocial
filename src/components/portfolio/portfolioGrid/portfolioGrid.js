import React from 'react';
import Grid from '@material-ui/core/Grid';
import PortfolioImg from '../../../images/project/1.png';
import PortfolioGridItem from '../portfolioGridItem';

export default class PortfolioGrid extends React.Component {
    render() {
        return (
            <div className="main-content">
                <div className="iq-portfolio-page overview-block-ptb overview-block-pb5">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <Grid container spacing={3} className="isotope iq-columns-3  infinite-scrolling">
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                            <PortfolioGridItem gridItemImg={PortfolioImg} />
                        </Grid>
                    </div>
                    </div>
                </div>      
                </div>
            </div>
        )
    }
}