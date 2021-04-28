import React from 'react';
import AccountChart from '../accountChart';
import AccountActivityItem from '../accountActivityItem';

export default class AccoutActivity extends React.Component {
    render() {
        return(
            <section className="iq-works position-relative activity-section pt-0 we-offer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="section-title">
                            <h2 className="title iq-fw-8">Your latest activity</h2>
                            </div>
                        </div>
                    </div>
                    <div className="main-activity">
                        <h5 className="main-activity__title">
                            Your Activity
                        </h5>
                        <div className="main-activity__container">
                            <div className="main-activity__table-container">
                                <table className="main-activity__table">
                                    <thead className="main-activity__table-head">
                                        <tr className="main-activity__table-row">
                                            <th className="main-activity__table-name">
                                                Type of operation
                                            </th>
                                            <th className="main-activity__table-name">
                                                Value
                                            </th>
                                            <th className="main-activity__table-name">
                                                Data
                                            </th>
                                            <th className="main-activity__table-name">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="main-activity__table-body">
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"Done"}
                                            statusClass={"status-done"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"Failed"}
                                            statusClass={"status-failed"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"Done"}
                                            statusClass={"status-done"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"Done"}
                                            statusClass={"status-done"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"Failed"}
                                            statusClass={"status-failed"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"In process"}
                                            statusClass={"status-in-process"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"Done"}
                                            statusClass={"status-done"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"Failed"}
                                            statusClass={"status-failed"}
                                        />
                                        <AccountActivityItem 
                                            typeOfOperaiton={"Subscribers"}
                                            count={"2000"}
                                            data={"23.03.1999, 2:08 PM"}
                                            statusOfOperation={"In process"}
                                            statusClass={"status-in-process"}
                                        />
                                    </tbody>
                                </table>
                            </div>
                            <AccountChart />
                        </div>
                    </div>
                </div>
            </section>    
        )
    }
}