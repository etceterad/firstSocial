import React from 'react';
import Loader from '../../images/loader.gif'

export default class Preloader extends React.Component {
    constructor(){
        super()

        this.state = {
            preloaderActive: true
        }

        // this.resetPreloaderActive = this.resetPreloaderActive.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                preloaderActive: false
            })
        }, 800)
    }

    render(){
        return(
            <div id="loading" className={this.state.preloaderActive ? "preloader-active" : "preloader"}>
                <div id="loading-center">
                    <img src={Loader} alt="loder" />
                </div>
            </div>
        )
    }
} 