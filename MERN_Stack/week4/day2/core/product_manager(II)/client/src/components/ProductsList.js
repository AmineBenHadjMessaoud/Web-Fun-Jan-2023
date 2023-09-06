import React,{useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function ProductsList(props) {
    const {products,setProducts} = props
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>setProducts(res.data))
        .catch((err)=> console.log(err))
    },[])
  return (
    <div>
        {
            products.map((product, index)=>{
                return <p key={index}>product title: {product.title}, product price: {product.price}$, product description: {product.description} <Link to={`/products/${product._id}`}>product detail</Link></p>
            })
        }
    </div>
  )
}

export default ProductsList