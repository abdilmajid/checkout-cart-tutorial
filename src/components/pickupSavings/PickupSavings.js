import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

const styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings : {
    color: 'red',
    fontWeight: 800
  }
}

class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id='tooltip'>
        <p>Picking up your order in the store helps cut cost, and we pass on the savings to you.</p>
      </Tooltip>
    )
    return (
      <Row className='show-grid'>
        <Col md={6}>
          <OverlayTrigger placement='bottom' overlay={tooltip}>
            <div style={styles.pickupSavings}> Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>{`$${this.props.price}`}</Col>
      </Row>
    )
  }
}


// OverlayTriggers -> shows message when mouse over item, message from Tooltip tag with given id

export default PickupSavings;