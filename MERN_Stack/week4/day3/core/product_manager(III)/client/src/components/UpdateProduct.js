import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
function UpdateProduct(props) {
    const {id} =useParams()
    const [pTitle, setPtitle]= useState()
    const [pPrice, setPprice]= useState()
    const [pDescription, setPdescription] =useState()
    const navigate= useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setPtitle(res.data.title)
                setPprice(res.data.price)
                setPdescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
         title:pTitle,
         price:pPrice ,
         description:pDescription
        })
            .then(res => {
                console.log(res)
                navigate("/products")
            })
            .catch(err => console.log(err))
    }
  return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product title:</label><br />
                    <input type="text" 
                    name="productTitle" 
                    value={pTitle} 
                    onChange={(e) => { setPtitle(e.target.value) }} />
                </p>
                <p>
                    <label>Product price:</label><br />
                    <input type="text" 
                    name="productPrice"
                    value={pPrice} 
                    onChange={(e) => { setPprice(e.target.value) }} />
                </p>
                <p>
                    <label>Product description:</label><br />
                    <input type="text" 
                    name="productDescription"
                    value={pDescription} 
                    onChange={(e) => { setPdescription(e.target.value) }} />
                </p>
                <input type="submit" value="update"/>
            </form>
        </div>
  )
}

export default UpdateProduct