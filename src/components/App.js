import React,{Component} from 'react'
import Product from './products'
import Cart from './cart'



class App extends Component {
  render() {
    return (
      <div>
        <Product/>
        <Cart />
      </div>
    )
  }
}
export default App