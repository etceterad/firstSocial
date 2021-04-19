import React from 'react';

export default class AccordeonItem extends React.Component {
    render(){
        const {tabName, tabDescription, tabClassName,clickHandler} = this.props;

        return(
            <div 
                className={"iq-ad-block wow fadeInUp " + tabClassName} 
                onClick={clickHandler}
            > 
                <span className="ad-title iq-fw-6 ">
                    {tabName}
                </span>
                <div className="ad-details">
                    <p>
                        {tabDescription}
                    </p>
                </div>
            </div>
        )
    }
}