import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import {change_count,change_count_success,delete_cart,delete_cart_success,load_cart,load_cart_success,add_product,add_product_success} from '../actions/cart-action'

// 添加到购物车
function* addProduct(action) {
  const data = yield axios.post('/cart/add',{gid:action.payload}).then(res=>res.data)
  yield put(add_product_success(data))
}
// 获取购物车列表
function* loadCart() {
  const data = yield axios.get('/cart').then(res=>res.data)
  console.log(data);
  yield put(load_cart_success(data))
}
// 删除购物车列表
function* deleteCart(action) {
  yield axios.delete('/cart/delete',{
    params:{
      cid:action.payload
    }
  }).then(res=>res.data)
  yield put(delete_cart_success(action.payload))
}
// 更改购物车货物数量
function* changCount(action) {
  const data=yield axios.put('/cart',action.payload).then(res=>res.data)
  yield put(change_count_success(data))
}
export default function* cartSaga() {
  yield takeEvery(add_product,addProduct)
  yield takeEvery(load_cart,loadCart)
  yield takeEvery(delete_cart,deleteCart)
  yield takeEvery(change_count,changCount)


}
