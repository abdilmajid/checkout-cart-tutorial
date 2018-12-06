import React, { Component } from 'react';
import { Row , Col, Button, Collapse, Well, Media } from 'react-bootstrap';



class ItemDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }


  render() {
    return (
      <div>
        <Button
            className='item-details-button'
            bsStyle='link'
            onClick={() => this.setState({open: !this.state.open})}
            style={{outline: 'none'}}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img 
                    width={100}
                    height={100}
                    src='/images/ps4.jpg'
                    alt='product thumbnail'
                  />
                </Media.Left>
                <Media.Body>
                  <p>Ultimate Gamer PS4 Console by Sony</p>
                  <Row className='show-grid'>
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br/>
                      <strong className='price-strike'>{`$${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}> Qty: 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}



// Collapse => is the accordian styling
// Well => makes card look like it has depth. use this tag to display all info on products
// Media => allows us to put image and text(title + paragraph) into the card
// this.state.open => toggle collapse
// Remove outline focus artifact from (See/Hide item +) using incline styles



export default ItemDetails;