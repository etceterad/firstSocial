import React from 'react';
import RightBlockImg from '../../../images/login/login.png'

export default class LoginRightBlock extends React.Component {
    render() {
        return(
            <div className="col-lg-6 align-self-center position-relative">
               <div className="login-right-bar h-100 text-center">
                  <img src={RightBlockImg} className="img-fluid" alt=" " />
               </div>
            </div>
        )
    }
}