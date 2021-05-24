import React from 'react';
import ManageAccountForm from './manageAccountForm';
import ManageAccountPass from './manageAccountPass';

const ManageAccount = () => {
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
                    <ManageAccountForm />
                    <ManageAccountPass />
                </div>
            </div>
        </section>
    )
}

export default ManageAccount;