import React from 'react';
import TikTokApi from '../../../services';
import Spinner from '../../spinner';

export default class SearchProfileMain extends React.Component {
    tikTokApi = new TikTokApi();

    constructor(props) {
        super(props)

        this.state = {
            login: "",
            onLoad: true,
            user: {},
            onError: false
        }

        this.handleInputLoginChange = this.handleInputLoginChange.bind(this)
    }

    handleInputLoginChange(e) {
        this.setState({
            login: e.target.value
        })
        console.log(this.state.login)
    }

    loadProfile = async (e, username) => {
        this.tikTokApi.getUserInfo(e, username)
            .then(this.onUserLoaded)
            .catch(this.errorCatcher);
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

    render() {
        const { user } = this.state.user;

        const ProfileData = this.state.onLoad ? <Spinner /> : <UserProfile user={user}  />;

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
                                        <button type="button" onClick={(e) => this.loadProfile(e, this.state.login)} className="button form-button search-btn">SEARCH</button>
                                    </div>   
                                </div>
                            </form>
                        </div>
                        {ProfileData}
                    </div>
                </div>
            </section>        
        )
    }
}

class UserProfile extends React.Component {
    
    render() {

        const { user } = this.props;
        const {avatar, login_name, name, followers, following, likes} = user;

        return(
            <>
                <div className="main-search__user-info">
                    <div className="user-img">
                        <img src={avatar} alt=""  / >
                    </div>
                    <div className="user-info">
                        <ul className="user-info__list">
                            <li className="user-info__list-item">@{login_name}</li>
                            <li className="user-info__list-item">{name}</li>
                            <li className="user-info__list-item">{followers} followers</li>
                            <li className="user-info__list-item">{following} following</li>
                            <li className="user-info__list-item">{likes} likes</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    
}