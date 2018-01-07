import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

class Toolbar extends Component{
  render(){
    return(
      <Row className=" marg">
        <Col sm={3} className=" col-padding float-right">
          
        </Col>
        <Col sm={{size: 2, offset: 6}} className="col-padding ">
          <button type="button" class="btn btn-primary  btn-block">Add Paragraph</button>
        </Col>
        <Col sm={{size: 1, offset: 0}} className="col-padding  ">
          <button type="button" class="btn btn-success btn-block">Save</button>
        </Col>
      </Row>
    )
  }
}

export default Toolbar;
