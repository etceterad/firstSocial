import React from 'react';
import Header from '../../header';
import Offer from '../../offer';
import AccountActivity from '../../account/accountActivity';
import SearchProfileMain from '../searchProfileMain';
import Preloader from '../../preloader';
import Footer from '../../footer';

export default class SearchProfilePage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titleActive: "Search by Login"
        }
    }

    render() {
        return(
            <>
                <Preloader />
                <Header />
                <Offer titleActive={this.state.titleActive}/>
                <div className="main-content">
                    <SearchProfileMain />
                    <AccountActivity />
                </div>
                <Footer />
            </>
        )
    }
}