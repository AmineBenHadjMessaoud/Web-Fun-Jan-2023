import React,{useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
function ProductsList(props) {
    const {removeFromDom,products,setProducts} = props
    const navigate =useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>setProducts(res.data))
        .catch((err)=> console.log(err))
    },[])
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
   
  return (
    <div>
        {
            products.map((product, index)=>{
                return <p key={index}>
                    product title: {product.title},
                     product price: {product.price}$,
                      product description: {product.description}
                       <Link to={`/products/${product._id}`}>product detail</Link> ,
                       <button onClick={()=>navigate(`/products/edit/${product._id}`)}>update</button>
                       <button onClick={(e)=>deleteProduct(product._id)}>delete</button>
                       </p>
            })
        }
    </div>
  )
}

export default ProductsList