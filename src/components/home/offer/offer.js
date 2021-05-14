import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import OfferTabsItem from '../offerTabsItem';
import Background13 from './images/13.png';
import TikTokApi from '../../../services'
import OfferModal from '../offerModal';
import OfferSubscribersImg from './images/5.png';
import OfferLikesImg from './images/06.png';
import OfferViewsImg from './images/08.png';

export default class Offer extends React.Component {
    tikTokApi = new TikTokApi()

    constructor(props) {
        super(props)

         this.state = {
            toggleState: 1,
            modalActive: false,
            user: {},
            onLoad: true,
            onError: false,
            price: null,
            number: 0
         }

         this.resetActive = this.resetActive.bind(this)
         this.handleNumberInput = this.handleNumberInput.bind(this)
    }

    handleNumberInput(e) {
        this.setState({
            number: e.target.value.replace(/[^0-9]/ig, ''),
        })
        setTimeout(() => this.setState({
            price: this.state.number / 10
        }))
        console.log(this.state.number)
    }

    toggleTabs(index, e) {
        this.setState({
            toggleState: index
        });
        e.preventDefault();
    }

    activateModal(e) {
        this.setState({
            modalActive: true 
        })
        e.preventDefault();
    }

    resetActive() {
        this.setState({
            modalActive: false,
            onLoad: true,
            onError: false,
        })
    }

    errorCatcher = async () => {
         this.setState({
            onError: true,
        })
    }

    onUserLoaded = async (user) => {
        this.setState({
            user: user,
            onLoad: false,
            onError: false
        })
        await console.log(this.state.user)
    }

    loadProfile = async (e, username) => {
        this.tikTokApi.getUserPosts(e, username)
            .then(this.onUserLoaded)
            .catch(this.errorCatcher)
    }
    
    loadProfileInfo = async (e, username) => {
        this.tikTokApi.getUserInfo(e, username)
            .then(this.onUserLoaded)
            .catch(this.errorCatcher)
    }   

    render() {
        const {user, posts} = this.state.user;

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
                            imageClass="main-form__tab-img wow fadeInRight"
                            activateModal={(e) => this.activateModal(e)}   
                            runPost={(e, state) => this.loadProfileInfo(e, state)}
                            price={this.state.price}
                            numberInput={(e) => this.handleNumberInput(e)}
                            number={this.state.number}
                        />
                        <OfferTabsItem 
                            tabsImg={OfferLikesImg}
                            formTitle="You want Likes?"   
                            placeholderValue="Likes"
                            tabsToggleClass={this.state.toggleState === 2 ? "main-form__tab active-tab" : "main-form__tab"} 
                            imageClass="main-form__tab-img likes-img wow fadeInRight"
                            activateModal={(e) => this.activateModal(e)}
                            runPost={(e, state) => this.loadProfile(e, state)}                    
                            price={this.state.price}
                            numberInput={(e) => this.handleNumberInput(e)}
                            number={this.state.number}
                        />
                        <OfferTabsItem 
                            tabsImg={OfferViewsImg}
                            formTitle="You want Views?"   
                            placeholderValue="Views"
                            tabsToggleClass={this.state.toggleState === 3 ? "main-form__tab active-tab" : "main-form__tab"}    
                            imageClass="main-form__tab-img views-img wow fadeInRight"      
                            activateModal={(e) => this.activateModal(e)}
                            runPost={(e, state) => this.loadProfile(e, state)}     
                            price={this.state.price} 
                            numberInput={(e) => this.handleNumberInput(e)}
                            number={this.state.number}
                        />
                    </div>
                    <ScrollToBottom >
                        <OfferModal
                            resetActive={this.resetActive}
                            active={this.state.modalActive} 
                            onLoad={this.state.onLoad}
                            userInfo={user}
                            posts={posts}
                            errorHandler={this.state.onError}
                            activeTabId={this.state.toggleState}
                            userInput={this.state.user}
                            price={this.state.price}
                        />
                    </ScrollToBottom>
                    </div>
                </section>
            </div>
        )
    }
}