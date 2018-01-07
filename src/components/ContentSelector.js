import React, { Component }  from 'react';
import { Row, Col, Button } from 'reactstrap';

class ContentSelector extends Component{

  state={
    partners_selected: this.props.selected.partners_selected,
    company_selected: this.props.selected.company_selected
  }

  handleClickPartners = (e) =>{
    e.preventDefault();
    this.setState({
      partners_selected: true,
      company_selected: false
    })
    this.props.selectContent(this.state)
  }

  handleClickCompany = (e) =>{
    e.preventDefault();
    this.setState({
      partners_selected: false,
      company_selected: true
    })
    this.props.selectContent(this.state)
  }

  render(){
    return(
      <div>
        <Row>
          <Col xs={{size: 6}} className=" col-padding bg-white">
            <button
              type="button"
              className={`btn btn-${
                this.props.selected.partners_selected === true
                  ? "primary"
                  : "outline-primary"
                }
                btn-lg btn100`}
              onClick={this.handleClickPartners}
            >
              Partners Info
            </button>
          </Col>
          <Col xs="6" className=" col-padding bg-white">
            <button
              type="button"
              className={`btn btn-${
                this.props.selected.company_selected === true
                  ? "primary"
                  : "outline-primary"
                }
              btn-lg btn100`}
              onClick={this.handleClickCompany}
            >
              Company Info
            </button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ContentSelector;
