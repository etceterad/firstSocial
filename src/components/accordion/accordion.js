import React from 'react';

export default class Accordeon extends React.Component {
    constructor() {
        super()

        this.state = {
            activeTabId: 0,
            activeTab: false
        }
    }

    setActiveTabId(id){
        this.setState({
            activeTabId: id,
            activeTab: !this.state.activetab
        })
    }


    render() {
        return(
                <div className="iq-accordion">
                    <div className={this.state.activeTabId === 1 ? "iq-ad-block ad-active" : "iq-ad-block"} onClick={() => this.setActiveTabId(1)}> <span href=" " onClick={this.preventDefault} className="ad-title iq-fw-6 ">Why do we use it?</span>
                        <div className="ad-details">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </p>
                        </div>
                    </div>
                    <div className={this.state.activeTabId === 2 ? "iq-ad-block ad-active" : "iq-ad-block"}onClick={() => this.setActiveTabId(2)}> <span href=" " onClick={this.preventDefault} className="ad-title iq-fw-6 ">Where does it come from?</span>
                        <div className="ad-details">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </p>
                        </div>
                    </div>
                    <div className={this.state.activeTabId === 3 ? "iq-ad-block ad-active" : "iq-ad-block"}onClick={() => this.setActiveTabId(3)}> <span href=" " onClick={this.preventDefault} className="ad-title iq-fw-6 ">There are many variationof passages?</span>
                        <div className="ad-details">  
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </p>
                        </div>
                    </div>
                    <div className={this.state.activeTabId === 4 ? "iq-ad-block ad-active" : "iq-ad-block"}onClick={() => this.setActiveTabId(4)}> <span href=" " onClick={this.preventDefault} className="ad-title iq-fw-6 ">Standard chunk of Lorem Ipsum used since the 1500s?</span>
                        <div className="ad-details">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </p>
                        </div>
                    </div>
                    <div className={this.state.activeTabId === 5 ? "iq-ad-block ad-active" : "iq-ad-block"}onClick={() => this.setActiveTabId(5)}> <span href=" " onClick={this.preventDefault} className="ad-title iq-fw-6 ">This book is a treatise on the theory?</span>
                        <div className="ad-details">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </p>
                        </div>
                    </div>
                    <div className={this.state.activeTabId === 6 ? "iq-ad-block ad-active" : "iq-ad-block"}onClick={() => this.setActiveTabId(6)}> <span href=" " onClick={this.preventDefault} className="ad-title iq-fw-6 ">What is Lorem Ipsum?</span>
                        <div className="ad-details">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}