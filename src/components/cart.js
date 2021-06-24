import React,{Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import *as cartActions from '../store/actions/cart-action'
class Cart extends Component {
    componentDidMount() {
        const {load_cart} = this.props
        load_cart()
    }
    changeCount(e,cid){
        const count = e.target.value
        const {change_count} = this.props
        change_count({
            cid,
            count
        })
    }
  render() {
    console.log(this.props,'cart')
    const {cart} = this.props.cart
    const {delete_cart} = this.props
    console.log(cart)
    return (
      <section className="container content-section" >
            <h2 className="section-header">购物车</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">商品</span>
                <span className="cart-price cart-header cart-column">价格</span>
                <span className="cart-quantity cart-header cart-column">数量</span>
            </div>
            <div className="cart-items">
                {
                 cart.map(cart=>{
                     return(
                        <div key={cart.id} className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" alt="" src={`http://localhost:3005${cart.thumbnail}`} width="100" height="100"/>
                                <span className="cart-item-title">{cart.title}</span>
                            </div>
                            <span className="cart-price cart-column">{cart.price}</span>
                            <div className="cart-quantity cart-column">
                                <input onChange={(e)=>{this.changeCount(e,cart.id)}} className="cart-quantity-input" type="number" value={cart.count}/>
                                <button onClick={()=>{delete_cart(cart.id)}} className="btn btn-danger" type="button">删除</button>
                            </div>
                        </div>
                     )
                 })
                }
            </div>
            <div className="cart-total">
                <strong className="cart-total-title">总价</strong>
                <span className="cart-total-price">￥{
                   cart.reduce((total,product) =>{
                    return total+=product.count*product.price
                  },0)
                }</span>
            </div>
        </section>
    )
  }
}
const mapStateToProps = state=>({
    cart:state.cart
})
const mapDispatchToProps = (dispatch)=> ({
    ...bindActionCreators(cartActions,dispatch)

  })
export default connect(mapStateToProps,mapDispatchToProps)(Cart)