import React from 'react';
import UserAvatar from '../../../images/avatar.png';

export default class SearchProfileMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: ""
        }

        this.handleInputLoginChange = this.handleInputLoginChange.bind(this)
    }

    handleInputLoginChange(e) {
        this.setState({
            login: e.target.value
        })
        console.log(this.state.login)
    }

    render() {
        return(
            <section className="iq-works position-relative pb-0 ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="section-title">
                            <h2 className="title  iq-fw-8">Find Your profile</h2>
                            </div>
                        </div>
                    </div>
                    <div className="main-from__calculate-container responsive-flex">
                        <div className="main-form__tab-calculate wow fadeInLeft">
                            <h3 className="main-form__calculate-title">
                                Search here
                            </h3>
                            <form action="">
                                <input type="text" className="main-form__input" onChange={this.handleInputLoginChange} placeholder="Username" />
                                <div className="main-form__calculated-area">
                                    <div className="calculated-area__button">
                                        <button type="submit" className="button form-button search-btn">SEARCH</button>
                                    </div>   
                                </div>
                            </form>
                        </div>
                        <div className="main-search__user-info">
                            <div className="user-img">
                                <img src={UserAvatar} alt=""/>
                            </div>
                            <div className="user-info">
                                <ul className="user-info__list">
                                    <li className="user-info__list-item">@login</li>
                                    <li className="user-info__list-item">Name</li>
                                    <li className="user-info__list-item">1 followers</li>
                                    <li className="user-info__list-item">1 following</li>
                                    <li className="user-info__list-item">1 likes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
        )
    }
}