import axios from 'axios';
import * as ActionTypes from '../actiontypes/admin.actiontypes';


//get all partners
export const getPartners = ()=>{
  return async (dispatch) =>{
    dispatch({type: ActionTypes.GET_PARTNERS_PENDITNG})
    let partners = await axios.get('http://www.smoadr.com/partners')
    console.log('payload', partners);
    dispatch({
      type: ActionTypes.GET_PARTNERS_SUCCESS,
      payload: partners
    })
  }
}

export const selectPartner = (id)=>{
  return async (dispatch)=>{
    console.log('id is: ', id);
    dispatch({type: ActionTypes.SELECT_PARTNER_PENDING})
    let select = await axios.patch(`http://www.smoadr.com/select/${id}`)
    dispatch({
      type: ActionTypes.SELECT_PARTNER_SUCCESS,
      payload: select
    })
  }
}
