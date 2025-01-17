import React,{useState,} from 'react'
import ProductForm from './ProductForm'
import ProductsList from './ProductsList'
function Main() {
    const [products, setProducts] = useState([])
    const removeFromDom = (productId) => {
      setProducts(products.filter(product => product._id != productId)); 
  }
  return (
    <div>
        <ProductForm products={products} setProducts={setProducts} />
        <hr/>
        <ProductsList products={products} setProducts={setProducts}  removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main