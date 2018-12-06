import React, { Component } from 'react';
import { Button, Collapse, Well, Form, Row, Col, FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import { handleChange } from '../../actions/promoCodeActions';

class PromoCode extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      open: false,
    }
  }

//handleChange coming from redux (in actions folder)
  handleChange = e => {
    this.props.handleChange(e);
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


const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})



export default connect(mapStateToProps, { handleChange })(PromoCode);