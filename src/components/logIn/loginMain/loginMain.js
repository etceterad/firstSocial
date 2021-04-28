import React from 'react';
import {Link} from 'react-router-dom';

export default class LoginMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            checkbox: false
        }

        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    emailHandler(e) {
        this.setState({
            email: e.target.value
        })
    } 

    passwordHandler (e) {
        this.setState({
            password: e.target.value
        })
        console.log(this.state.password)
    }

    checkboxHandler(e) {
        this.setState({
            checkbox: e.target.checked
        })
    }

    render() {
        return(
            <div className="login-info">
                <h2 className="iq-fw-9 mb-3">Login</h2>
                <h6>Welcome to <span className="main-color">TikTokFans</span> please login your account.</h6>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" onChange={this.emailHandler}  placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" onChange={this.passwordHandler} placeholder="Password" />
                    </div>
                    <div className="form-group form-check mb-4">
                        <input type="checkbox" className="form-check-input" onChange={this.checkboxHandler} checked={this.state.checkbox} id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        <Link to="/password-reset" className="float-right iq-fw-6">Forgot Password</Link>
                    </div>
                    <a className="slide-button button mr-3" href="/login">
                        <div className="first">Login</div>
                        <div className="second">Login</div>
                    </a>
                    <Link className="slide-button button bt-border" to="/register">
                        <div className="first">Register</div>
                        <div className="second">Register</div>
                    </Link>
                </form>
            </div>
        )
    }
}