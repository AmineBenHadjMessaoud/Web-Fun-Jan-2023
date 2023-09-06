import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function ProductDeatil(props) {
    const [productDetail , setProductDetail] =useState({})
    const {id} =useParams()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>setProductDetail(res.data))
        .catch((err)=> console.log(err))
    },[])
  return (
    <div>
        <h1>Product tiltle: {productDetail.title}</h1><br/>
        <h3>Product price: {productDetail.price}$</h3><br/>
        <h3>Product description: {productDetail.description}</h3>
        <h3>created at: {productDetail.createdAt}</h3>
        <h3>updated at: {productDetail.updatedAt}</h3>
    </div>
  )
}

export default ProductDeatil