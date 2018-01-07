import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';


class ParagraphList extends Component{

  state = {
    paragraph: this.props.data.paragraph
  }

  handleChange = (e) =>{
    e.preventDefault();
    this.setState({paragraph: e.target.value});
  }

  render(){
    return(
      <Row>
        <Col className="">
          <textarea className="custom-textarea" value={this.state.paragraph} onChange={(e) => this.handleChange(e)}></textarea>
        </Col>
      </Row>
    )
  }


}

export default ParagraphList;
