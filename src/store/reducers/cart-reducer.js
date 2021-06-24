import { handleActions as createReducer } from 'redux-actions';
import { change_count_success,delete_cart_success,load_cart_success,add_product_success } from '../actions/cart-action'
const intialState = {
  cart:[]
}
export default createReducer(
  {
    // 添加product
    [add_product_success]:(state,action)=>{
      
      const cartState = JSON.parse(JSON.stringify(state))
      // 如果已经有了相同的产品，则不加入数组，而是count加1
      const product = cartState.cart.find(product=>product.id===action.payload.id)
      // 存在已有的产品
      if(product) {
        product.count = product.count+1
      } else {
        cartState.cart.push(action.payload)
      } 
      console.log(cartState)
      return cartState
    },
    // 获取cart列表
    [load_cart_success]:(state,action)=>{
      return {
        ...state,
        cart:action.payload
      }
    },
    [delete_cart_success]:(state,action)=>{
      const cartState = JSON.parse(JSON.stringify(state))
      // 找到选择删除项的下标
     const index = cartState.cart.findIndex(cart=>
       cart.id ===action.payload
     )
     cartState.cart.splice(index,1)
      return cartState
    },
    [change_count_success]:(state,action)=>{
      const cartState = JSON.parse(JSON.stringify(state))
      // 找出需要更改的那一项
      const index = cartState.cart.findIndex(cart=>
        cart.id ===action.payload.id
      )
      cartState.cart[index].count = action.payload.count
      return cartState
    },
  },intialState
)