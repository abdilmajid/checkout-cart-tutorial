import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';

import Subtotal from './components/subtotal/Subtotal';
import PickupSavings from './components/pickupSavings/PickupSavings';
import TaxesFees from './components/taxesFees/TaxesFees';
import EstimatedTotal from './components/estimatedTotal/EstimatedTotal';
import ItemDetails from './components/itemDetails/ItemDetails';
import PromoCode from './components/promoCode/PromoCode';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disabledPromoBtn: false
    }
  }

  componentDidMount = () => {
    const { total, PickupSavings } = this.state;
    this.setState({
      taxes: (total + PickupSavings) * 0.13
    },
    function() {
      this.setState({
        estimatedTotal: total + PickupSavings + this.state.taxes
      })
    })
  }
  
  giveDiscountHandeler = () => {
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function() {
        this.setState({disabledPromoBtn: true})
      }
        )
    }
  }

  render() {
    return (
      <div className="container">
        <Grid className='purchase-card'>
          <Subtotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.PickupSavings.toFixed(2)}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr/>
          <PromoCode 
                isDisabled={this.state.disabledPromoBtn}
                giveDiscount={() => this.giveDiscountHandeler()}
              />
        </Grid>
      </div>
    );
  }
}


//Initailize App with state
// pass in props Subtotal -> price
// toFixed sets currency values (how many numbers after decimal)
// initial taxes in the state to 0, then use lifeCycle method to create a function that sets a state for the taxes. taxes will be a percentage of total.


const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App);
