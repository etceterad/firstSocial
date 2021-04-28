import React from 'react';
import LoginNav from '../../logIn/loginNav';
import LoginRightBlock from '../../logIn/loginRightBlock';
import RegisterMain from '../registerMain';
import FirstBackgorund from '../../../images/login/2.png';
import SecondBackground from '../../../images/login/3.png';
import ThirdBackground from '../../../images/login/1.png';
import Preloader from '../../preloader';

export default class RegisterPage extends React.Component {
    render() {
        return(
            <>
                <Preloader />
                <div class="login-from header-navbar light-gray-bg position-relative">
                    <div class="row no-gutters">
                        <div class="col-lg-6 align-items-stretch position-relative white-bg">
                            <LoginNav />
                            <RegisterMain />
                        </div>
                        <LoginRightBlock />
                    </div>
                    <img  src={FirstBackgorund} class="img-fluid login-footer-one" alt="" />
                    <img  src={SecondBackground} class="img-fluid login-footer-two" alt="" />
                    <img  src={ThirdBackground} class="img-fluid login-footer-three" alt="" />
                </div>
            </>        
        )
    }
}