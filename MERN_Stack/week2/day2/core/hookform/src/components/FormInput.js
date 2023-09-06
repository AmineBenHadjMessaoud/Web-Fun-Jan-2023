import React,{useState} from "react";

function FormInput  () {
    const [firstName, setFirstName] = useState("");
    const [laststName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
            <form >
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>confirm Password: </label>
                    <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </form>
            <h5>Your form data</h5>
            <h6>First Name: {firstName}</h6>
            <h6>Last Name: {laststName}</h6>
            <h6>Email: {email}</h6>
            <h6>Password: {password}</h6>
            <h6>Confirm Password: {confirmPassword}</h6>
        </div>
    
    );
}
export default FormInput;