import { handleActions as createReducer } from 'redux-actions';

import { load_product_success } from '../actions/product-actions'
const intialState = {
  products:[]
}
export default createReducer(
  {
    [load_product_success]:(state,action)=>({
      ...state,
      products:action.payload
    })
  },intialState
)