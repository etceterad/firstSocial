import React from 'react';
import OfferModalTime from '../offer/offerModalTime';
import Spinner from '../../spinner';
import Grid from '@material-ui/core/Grid';
import './offerModal.css';

export default class OfferModal extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            listItemId: 0,
            checkboxAgreement: true,
            selectedId: 0
        }

        this.handleCheckboxArgeementInput = this.handleCheckboxArgeementInput.bind(this);
        this.onSelectId = this.onSelectId.bind(this)
    }

    setListItemId(id) {
        this.setState({
            listItemId: id
        })
    }

    handleCheckboxArgeementInput(e) {
        console.log(this.state.checkboxAgreement)
        this.setState({
            checkboxAgreement: e.target.checked
        })
    }

    onSelectId(aweme) {
        this.setState({
            selectedId: aweme
        })
        console.log(this.state.selectedId)
    }

    render() {
        const {resetActive, active, userInfo, posts} = this.props;

        const ProfileData = this.props.onLoad ? <Spinner /> : <UserProfile user={userInfo} posts={posts} onSelectedId={(aweme_id) => this.onSelectId(aweme_id)}/>;
        const ErrorShow = this.props.errorHandler ? <ErrorMessage /> : null;

        return(
            <div className={active ? "modal active" : "modal"} onClick={resetActive} >
                <div className="purchase-popup" onClick={e => e.stopPropagation()}>
                    <h2 className="purchase-popup__title main-modal">
                        Select the post
                    </h2> 
                    {ProfileData}
                    {ErrorShow}
                    <h2 className="purchase-popup__title">
                        Select speed
                    </h2> 
                    <div className="offer-modal__select-time">
                        <ul className="select-time__list">
                            <Grid container spacing={3}>
                                <OfferModalTime
                                    itemClass={this.state.listItemId === 1 ? "select-time__list-item active-time" : "select-time__list-item"}
                                    itemHandler={() => this.setListItemId(1)}
                                    timeText={'15 min'} 
                                />
                                <OfferModalTime
                                    itemClass={this.state.listItemId === 2 ? "select-time__list-item active-time" : "select-time__list-item"}
                                    itemHandler={() => this.setListItemId(2)}
                                    timeText={'30 min'} 
                                />
                                <OfferModalTime
                                    itemClass={this.state.listItemId === 3 ? "select-time__list-item active-time" : "select-time__list-item"}
                                    itemHandler={() => this.setListItemId(3)}
                                    timeText={'1 hour'} 
                                />
                                <OfferModalTime
                                    itemClass={this.state.listItemId === 4 ? "select-time__list-item active-time" : "select-time__list-item"}
                                    itemHandler={() => this.setListItemId(4)}
                                    timeText={'3 hours'} 
                                />
                                <OfferModalTime
                                    itemClass={this.state.listItemId === 5 ? "select-time__list-item active-time" : "select-time__list-item"}
                                    itemHandler={() => this.setListItemId(5)}
                                    timeText={'12 hours'} 
                                />
                                <OfferModalTime
                                    itemClass={this.state.listItemId === 6 ? "select-time__list-item active-time" : "select-time__list-item"}
                                    itemHandler={() => this.setListItemId(6)}
                                    timeText={'1 day'} 
                                />
                            </Grid>
                        </ul>
                    </div>
                    <div className="purchase-popup__form">
                        <form action="">
                        <input
                            type="checkbox" 
                            className="purchase-popup__form-check" 
                            onChange={this.handleCheckboxArgeementInput} 
                            checked={this.state.checkboxAgreement} 
                            id="purchase-popup-checkbox"
                         />
                        <label className="purchase-popup__form-label" for="purchase-popup-checkbox">I accept the user agreement</label><br />
                        <button className="purchase-popup__form-button button">Purchase</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }       
}

const ErrorMessage = () => {
    return(
        <h4 style={{color: "red", textAlign:"center"}}>Oops, something goes wrong...<br />Check Your login!</h4>
    )
}

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeId: 0
        }

    }

    selectId = async (aweme) => {
        await this.setState({
            activeId: aweme
        })
        await this.props.onSelectedId(this.state.activeId)
        console.log(this.state.activeId)
    }
    
    render() {

        const { user, posts } = this.props;
        const {avatar, login_name, name, followers, following, likes} = user;

        const renderVideos = () => {
            if(posts === null){
                <div className="no-posts" style={{width: 0, height: 0}}></div>
                
            } else {
                return posts.map(item => {
                    const {aweme_id, cover} = item;

                    return (
                        <Grid 
                            item xs={4} md={3}
                            key={aweme_id}
                            onClick={() => this.selectId(aweme_id)}
                        >
                            <img src={cover} alt=" " className={this.state.activeId === aweme_id ? "selected posts-img" : "posts-img"}  />
                        </Grid>
                    )
                })
            }
        }
        const postsList = renderVideos(posts);

        return(
            <>
                <div className="main-search__user-info main-modal">
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
                <Grid container spacing={2} className="modal-grid__container">
                    {postsList}
                </Grid>
            </>
        )
    }
    
}