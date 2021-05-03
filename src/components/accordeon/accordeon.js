import React from 'react';
import AccordeonItem from '../accordeon/accordeonItem';

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
            activeTab: true
        })
    }

    render() {
        return(
                <div className="iq-accordion">
                    <AccordeonItem
                        tabName={"Why do we use it?"}
                        tabDescription={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
                        tabClassName={this.state.activeTabId === 1 ? this.state.activeTab ? "ad-active" : " " : " "} 
                        clickHandler={() => this.setActiveTabId(1)}
                    />
                    <AccordeonItem
                        tabName={"Where does it come from?"}
                        tabDescription={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
                        tabClassName={this.state.activeTabId === 2 ? this.state.activeTab ? "ad-active" : " " : " "} 
                        clickHandler={() => this.setActiveTabId(2)}
                    />
                    <AccordeonItem
                        tabName={"There are many variationof passages?"}
                        tabDescription={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
                        tabClassName={this.state.activeTabId === 3 ? this.state.activeTab ? "ad-active " : " " : " "} 
                        clickHandler={() => this.setActiveTabId(3)}
                    />
                    <AccordeonItem
                        tabName={"Standard chunk of Lorem Ipsum used since the 1500s?"}
                        tabDescription={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
                        tabClassName={this.state.activeTabId === 4 ? this.state.activeTab ? "ad-active" : " " : " "} 
                        clickHandler={() => this.setActiveTabId(4)}
                    />
                    <AccordeonItem
                        tabName={"This book is a treatise on the theory?"}
                        tabDescription={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
                        tabClassName={this.state.activeTabId === 5 ? this.state.activeTab ? "ad-active" : " " : " "} 
                        clickHandler={() => this.setActiveTabId(5)}
                    />
                    <AccordeonItem
                        tabName={"What is Lorem Ipsum?"}
                        tabDescription={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."}
                        tabClassName={this.state.activeTabId === 6 ? this.state.activeTab ? "ad-active" : " " : " "} 
                        clickHandler={() => this.setActiveTabId(6)}
                    />
                </div>
        )
    }
}