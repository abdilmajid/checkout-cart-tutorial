import React, { Component } from 'react';
import { Button, Collapse, Well, Form, Row, Col, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';

class PromoCode extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      value: ''
    }
  }

  render() {
    return (
      <div>
        <Button
            className='promo-code-button'
            bsStyle='link'
            onClick={() => this.setState({open: !this.state.open})}
            style={{outline: 'none'}}
        >
          {this.state.open === false ? `Apply` : `Hide`} Promo Code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Row className='show-grid'>
                <Col md={12}> 
                  <Form>
                    <FormGroup controlId='formInlineName'>
                      <ControlLabel>Promo Code</ControlLabel>
                      <FormControl
                          type='text'
                          placeholder='Enter Promo Code'
                          value={this.props.promoCode} 
                          onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                        block
                        bsStyle='success'
                        className='btn-round'
                        disabled={this.props.isDisabled}
                        onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}

// isDisabled => boolean(true or false) if true apply discount, this is to control so that discount is not applied multiple times but only once.

export default PromoCode;