import React from 'react'

export default class PasswordResetMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: " "
        }

        this.emailHandler = this.emailHandler.bind(this)
    }

    emailHandler(e) {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    render() {
        return(
            <div className="login-info">
                <h2 className="iq-fw-8 mb-3">Reset Password</h2>
                <h6>Please enter your email address to request a password reset.</h6>
                <form>
                    <div className="form-group">
                    <input type="email" className="form-control" onChange={this.emailHandler} placeholder="Email Address" />
                    </div>
                    <a className="slide-button button mr-3" href="password-reset.html">
                        <div className="first">Reset Password</div>
                        <div className="second">Reset Password</div>
                    </a>
                </form>
            </div>
        )
    }
}