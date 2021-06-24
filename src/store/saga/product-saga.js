import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { load_product,load_product_success } from '../actions/product-actions'

// 获取商品列表
function* loadProduct() {
  const data = yield axios.get('/goods').then(res=>res.data)
  yield put(load_product_success(data))
}
export default function* productSaga() {
  yield takeEvery(load_product,loadProduct)

}