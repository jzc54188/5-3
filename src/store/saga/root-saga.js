import productSaga from "./product-saga";
import cartSaga from './cart-saga'
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
  yield all([
    productSaga(),
    cartSaga()
  ])
}