import React from 'react';
import {Link} from 'react-router-dom';

export default class RegisterMain extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            username: "",
            checkbox: false
        }

        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.usernameHandler = this.usernameHandler.bind(this)
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

    usernameHandler(e) {
        this.setState({
            username: e.target.value
        })
    }

    checkboxHandler(e) {
        this.setState({
            checkbox: e.target.checked
        })
    }

    render() {
        return(
            <div className="login-info">
            <h2 className="iq-fw-8 mb-3">Register</h2>
            <h6>Welcome to <span className="main-color">TikTokFans</span> please Register your account.</h6>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" onChange={this.usernameHandler} placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" onChange={this.emailHandler} placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" onChange={this.passwordHandler} placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" onChange={this.passwordHandler} placeholder="Confirm Password" />
              </div>
              <div className="form-group form-check mb-4">
                <input type="checkbox" className="form-check-input" onChange={this.checkboxHandler} checked={this.state.checkbox} id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">By Clicking register, you agree on our term and condition</label>
              </div>
               <Link className="slide-button button mr-3" to="/register">
                <div className="first">Register</div>
                <div className="second">Register</div>
              </Link>
              <Link className="slide-button button bt-border" to="/login">
                <div className="first">Login</div>
                <div className="second">Login</div>
              </Link>
            </form>
          </div>
        )
    }
}