import React from 'react';
import Grid from '@material-ui/core/Grid';

export default class OfferModalTime extends React.Component {
    render() {
        const {itemClass, itemHandler, timeText} = this.props;

        return(
            <Grid item xs={4}>
                <li className={itemClass} onClick={itemHandler}>
                    <a href="/" onClick={(e) => e.preventDefault()} className="list-item__link">
                        {timeText}
                    </a>
                </li>
            </Grid>    
        )
    }
}