import React from 'react';
import OfferTabsItem from '../offerTabsItem';
import Background13 from './images/13.png';
import OfferSubscribersImg from './images/5.png';
import OfferLikesImg from './images/06.png';
import OfferViewsImg from './images/08.png';

export default class Offer extends React.Component {
    constructor(props) {
        super(props)

         this.state = {
            toggleState: 1
         }
    }

    toggleTabs(index, e) {
        this.setState({
            toggleState: index
        });
        e.preventDefault();
    }

    render() {
        
        return (
            <div className="main-form">
                <div className="left-img"><img src={Background13} className="img-fluid" alt="offer" /></div>
                <section className="main-form__section">
                    <div className="container">
                    <div className="main-form__text">
                        <h1 className="main-form__title">
                            Form title
                        </h1>
                        <p className="main-form__desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi quidem dolores doloremque impedit sit nemo pariatur, dignissimos et. Aspernatur nam amet itaque et dolor debitis illum ipsum voluptatem impedit.
                        </p>
                    </div>
                    <div className="main-form__content">
                        <div className="our-info"> 
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="about-us text-center list-inline">
                                        <li className="list-inline-item"><a href=" " onClick={(e) => this.toggleTabs(1, e)} className={this.state.toggleState === 1 ? "active" : ""}><span>Subscribers</span></a></li>
                                        <li className="list-inline-item"><a href=" " onClick={(e) => this.toggleTabs(2, e)} className={this.state.toggleState === 2 ? "active" : ""}><span>Likes</span></a></li>
                                        <li className="list-inline-item"><a href=" " onClick={(e) => this.toggleTabs(3, e)} className={this.state.toggleState === 3 ? "active" : ""}><span>Views</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <OfferTabsItem 
                            tabsImg={OfferSubscribersImg}
                            formTitle="You want Subscribers?"   
                            placeholderValue="Subscribers"
                            tabsToggleClass={this.state.toggleState === 1 ? "main-form__tab active-tab" : "main-form__tab"}                     
                        />
                        <OfferTabsItem 
                            tabsImg={OfferLikesImg}
                            formTitle="You want Likes?"   
                            placeholderValue="Likes"
                            tabsToggleClass={this.state.toggleState === 2 ? "main-form__tab active-tab" : "main-form__tab"}                     
                        />
                        <OfferTabsItem 
                            tabsImg={OfferViewsImg}
                            formTitle="You want Views?"   
                            placeholderValue="Views"
                            tabsToggleClass={this.state.toggleState === 3 ? "main-form__tab active-tab" : "main-form__tab"}                     
                        />
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}