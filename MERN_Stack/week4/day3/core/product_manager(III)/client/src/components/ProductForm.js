import React,{useState} from 'react'
import axios from 'axios'
function ProductForm(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description,setDescription] = useState("");
    const {products,setProducts} = props
    const onSubmitHandler = (e) => {
       
        e.preventDefault();
    
        axios.post('http://localhost:8000/api/products', {
          title,
          price,
          description     
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setProducts([...products,res.data ])
            })
            .catch(err=>console.log(err))
    }

  return (
    <form onSubmit={onSubmitHandler}>
        <p>
            <label>Tiltle</label><br/>
            <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
        </p>
        <p>
            <label>price</label><br/>
            <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
        </p>
        <p>
            <label>description</label><br/>
            <input type="textarea" onChange = {(e)=>setDescription(e.target.value)}/>
        </p>
        <input type="submit" value="Create"/>
</form>
  )
}

export default ProductForm