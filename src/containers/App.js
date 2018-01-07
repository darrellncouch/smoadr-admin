import React, { Component } from 'react';
import ContentSelector from '../components/ContentSelector';
import * as ActionCreators from '../actions/admin.actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Topnav from '../components/Topnav';
import PartnerList from '../components/PartnerList';
import Toolbar from '../components/Toolbar';
import ParagraphList from '../components/ParagraphList';
import { Row, Col } from 'reactstrap';
import '../App.css';
import logo from '../logo.svg';


class App extends Component {
  state = {
    partners_selected: true,
    company_selected: false
  }

  //updates state to determin what content is rendered.
  selectContent = (change)=>{
    this.setState({
      partners_selected: change.partners_selected,
      company_selected: change.company_selected
    })
  }

  componentDidMount = ()=>{
    this.props.getPartners()
  }

  handleClick = (id)=>{
    this.props.selectPartner(id)
  }

  render() {

    //sorts out partners from api and renders as list items
    let partnersList = this.props.partners.map(
      (partner, index)=>{
        if(partner.first_name){
          return (
            <PartnerList
              partner={partner}
              handleClick={this.handleClick}
            />
          )
        }
      })

      //sorts out paragraphs from api and renders as textboxes
      let paragraphs = this.props.partners.map(
        (item)=>{
          if(!item.first_name){
            return(
              <ParagraphList
                data={item}
              />
            )
          }
        }
      )


      //conditional rendering for main content
      let primary_content = ()=>{
        if(this.state.partners_selected === true){
          return (
            <div>
              <Row className="primary_content">
                <Col sm={3} className="left  no-pad">
                  <div class="list-group">
                    {partnersList}
                  </div>
                </Col>
                <Col sm={9} className="right hello">
                  {paragraphs}
                </Col>
              </Row>
              <Toolbar />
            </div>
          )
        }else{
          return(
            <div>
              placeholder
            </div>
          )
        }
      }

    return (
      <div className="App">
        <Topnav />
        <div className="main ">
          <ContentSelector
            selected={this.state}
            selectContent={this.selectContent}
          />
          {/*call function to render main content*/}
          {primary_content()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    partners: state.partners
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    getPartners: bindActionCreators(ActionCreators.getPartners, dispatch),
    selectPartner: bindActionCreators(ActionCreators.selectPartner, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
