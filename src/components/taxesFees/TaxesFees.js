import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';



class TaxesFees extends Component {
  render() {
    return (
      <div>
        <Row className='show-grid'>
          <Col md={6}>Est. taxes & fees (Based on K1P8A7)</Col>
          <Col md={6}>{`$${this.props.taxes}`}</Col>
        </Row>
      </div>
    )
  }
}



export default TaxesFees;