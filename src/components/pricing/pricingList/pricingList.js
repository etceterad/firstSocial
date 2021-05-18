import React from 'react';
import PricingImg from '../../../images/pricing/1.png';
import PricingModal from '../pricingModal';
import PricingListItem from '../pricingListItem';
import '../pricingModal/pricingModal.css';

export default class PricingList extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            modalActive: false,
            nameActive: "",
            priceActive: "",
            swapToPayment: false
        }

        this.activateModal = this.activateModal.bind(this);
        this.resetActive = this.resetActive.bind(this);
        this.hanldeSwap = this.hanldeSwap.bind(this);
    }

    resetActive() {
        this.setState({
            modalActive: false,
            swapToPayment: false
        })
    }

    activateModal(name, price, e){
        this.setState({
            modalActive: true,
            nameActive: name,
            priceActive: price
        });
        e.preventDefault();
    }

    hanldeSwap(e) {
        e.preventDefault()

        this.setState({
            swapToPayment: true
        })
    }

    render() {
        return(
            <section className="iq-pricingplan">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                        <div className="section-title">
                            <p className="mt-2 text-uppercase iq-fw-3 iq-ls-3">Best Ever Price</p>
                            <h2 className="title iq-fw-8">Our Flexible Pricing Plans</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row  no-gutters ">
                        <div className="col-lg-12">
                            <PricingListItem
                                pricingListImg={PricingImg}
                                optionContentMarketing={false}
                                optionConsulting={false}
                                optionVideoMarketing={false}
                                itemName={"Starter"}
                                itemPrice={29} 
                                activateModal={(e) => this.activateModal("Starter", 29, e)}
                            />
                            <PricingListItem
                                pricingListImg={PricingImg}
                                optionContentMarketing={false}
                                optionConsulting={false}
                                optionVideoMarketing={false}
                                itemName={"Enterprice"}
                                itemPrice={49} 
                                activateModal={(e) => this.activateModal("Enterprice", 49, e)}
                            />
                            <PricingListItem
                                pricingListImg={PricingImg}
                                optionContentMarketing={false}
                                optionConsulting={false}
                                optionVideoMarketing={false}
                                itemName={"Professional"}
                                itemPrice={99} 
                                activateModal={(e) => this.activateModal("Professional", 99, e)}
                            />
                            <PricingListItem
                                pricingListImg={PricingImg}
                                optionContentMarketing={false}
                                optionConsulting={false}
                                optionVideoMarketing={false}
                                itemName={"Luxury"}
                                itemPrice={149} 
                                activateModal={(e) => this.activateModal("Luxury", 149, e)}
                            />
                            <PricingListItem
                                pricingListImg={PricingImg}
                                optionContentMarketing={false}
                                optionConsulting={false}
                                optionVideoMarketing={false}
                                itemName={"VIP"}
                                itemPrice={199} 
                                activateModal={(e) => this.activateModal("VIP", 199, e)}
                            />
                            <PricingListItem
                                pricingListImg={PricingImg}
                                optionContentMarketing={false}
                                optionConsulting={false}
                                optionVideoMarketing={false}
                                itemName={"Godlike"}
                                itemPrice={299} 
                                activateModal={(e) => this.activateModal("Godlike", 299, e)}
                            />
                        </div>
                    </div>
                </div>
            <PricingModal
                resetActive={this.resetActive}
                swapperHandle={(e) => this.hanldeSwap(e)}
                swapToPayment={this.state.swapToPayment}
                active={this.state.modalActive}
                amount={this.state.priceActive}
                name={this.state.nameActive}
                price={this.state.priceActive}
            />
        </section>
        )
    }
}