import React from 'react';

export default class ManageAccount extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            username: "",
            currentPass: "",
            newPass: ""
        }
        
        this.handleEmail = this.handleEmail.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handleCurrentPass = this.handleCurrentPass.bind(this)
        this.handleNewPass = this.handleNewPass.bind(this)
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleCurrentPass(e) {
        this.setState({
            currentPass: e.target.value
        })
    }

    handleNewPass(e) {
        this.setState({
            newPass: e.target.value
        })
    }

    render() {
        return(
            <section className="iq-works position-relative pt-0 we-offer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="section-title">
                                <h2 className="title iq-fw-8">Manage Your Account</h2>
                            </div>
                        </div>
                    </div>
                    <div className="main-manage">
                        <form className="main-manage__form">
                            <div className="main-manage__form-container">
                                <div className="main-manage__form-left">
                                    <div className="main-manage__form-block">
                                        <h5 className="main-manage__form-label">
                                            Username
                                        </h5>
                                        <input type="text" className="main-manage__form-input" onChange={this.handleUsername} placeholder="Type here"/><br />
                                    <button type="submit" className="button main-manage__btn" >Save changes</button>
                                    </div>
                                    <div className="main-manage__form-block">
                                        <h5 className="main-manage__form-label">
                                            Your Email
                                        </h5>
                                        <input type="email" className="main-manage__form-input" onChange={this.handleEmail} placeholder="Type here"/>
                                    </div>
                                </div>
                                <div className="main-manage__form-right">
                                    <div className="main-manage__form-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat nisi fugit? Deserunt laborum, culpa fugit aspernatur eveniet repudiandae aperiam exercitationem tempora non similique dignissimos doloribus eos aut perferendis. Accusantium!
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="main-manage__form-reset">
                            <div className="main-manage__form-container">
                                <div className="main-reset__form-left">
                                    <form action="">
                                        <h5 className="main-manage__form-label">
                                            Change Your password
                                        </h5>
                                        <input type="password" className="main-manage__form-input" onChange={this.handleCurrentPass} placeholder="Current password"/>
                                        <input type="password" className="main-manage__form-input" onChange={this.handleNewPass} placeholder="New password"/><br />
                                        <button type="submit" className="button main-reset__btn" >Save changes</button>
                                    </form>
                                </div>
                                <div className="main-reset__form-right">
                                    <div className="main-manage__form-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat nisi fugit? Deserunt laborum, culpa fugit aspernatur eveniet repudiandae aperiam exercitationem tempora non similique dignissimos doloribus eos aut perferendis. Accusantium!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}