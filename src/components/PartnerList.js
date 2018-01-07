import React, { Component } from 'react';
import { connect } from 'react-redux';

class PartnerList extends Component{

  handleSelect = (e, partner) =>{
    e.preventDefault();
    this.props.handleClick(partner)
    this.props.forceUpdateHandler
  }

  render(){
    return(
        <div class="list-group" sm={12}>
          <a
            href="#"
            class={`list-group-item list-group-item-action ${
              this.props.partner.  selected === true
              ? "active"
              : ""
              }
            }`}
            onClick={(e)=>this.props.handleClick(this.props.partner.id)}
          >
            {this.props.partner.first_name} {this.props.partner.middle_initial}. {this.props.partner.last_name}
          </a>
        </div>
    )
  }
}

const mapStateToProps = state =>{
  console.log("state.parnters:", state.partners);
  return {
    partners: state.partners
  }
}


export default connect(mapStateToProps, null)(PartnerList);
