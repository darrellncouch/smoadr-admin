import * as ActionTypes from '../actiontypes/admin.actiontypes';

export default (state = [], action)=>{

  switch(action.type){

    //get all partners
    case ActionTypes.GET_PARTNERS_PENDITNG:
      return state;
    case ActionTypes.GET_PARTNERS_SUCCESS:
      return [...action.payload.data];

    case ActionTypes.SELECT_PARTNER_PENDING:
      return state;
    case ActionTypes.SELECT_PARTNER_SUCCESS:
      return [...action.payload.data];

    default:
      return state;
  }
}
