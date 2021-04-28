import React from 'react';
import Loader from '../../images/loader.gif'

export default class Spinner extends React.Component {
    render() {
        return(
            <div className="spinner">
                <img src={Loader} alt=" "/>
            </div>
        )
    }
}