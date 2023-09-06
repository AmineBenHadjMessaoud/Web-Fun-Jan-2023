import React,{useState} from "react";

function FormInput  () {
    const [firstName, setFirstName] = useState("");
    const [laststName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameErorr, setFirstNameErorr] = useState("");
    const [LastNameErorr, setLastNameErorr] = useState("");
    const [emailErorr, setEmailErorr] = useState("");
    const [passwordErorr, setPasswordErorr] = useState("");
    const [confirmPasswordErorr, setConfirmPasswordErorr] = useState("")
    //first name check function
    function checkFName(e){
        setFirstName(e.target.value)
        if ( e.target.value.length ===1 ){
            setFirstNameErorr("First Name field must be at least 2 characters");
        } 
        else{
            setFirstNameErorr("");
        }
    }

// last name check function
    function checkLName(e){
        setLastName(e.target.value);
        if ( e.target.value.length ===1 ){
            setLastNameErorr("Last Name field must be at least 2 characters");
        } 
        else{
            setLastNameErorr("");
        }
    }
    
// email check funtion
    function checkEmail(e) {
        setEmail(e.target.value);
        if(e.target.value.length>=1 && e.target.value.length <5){
            setEmailErorr("Email field must be at least 5 characters");
        }
        else{
            setEmailErorr("");
        }
    }

//password check funtion 
    function checkPassword (e){
        setPassword(e.target.value)
        if(e.target.value.length>=1 && e.target.value.length <8){
            setPasswordErorr ("Password field must have a minimum of eight characters") ;
        }
        else{
            setPasswordErorr("");
        }
        
    }

    //confirm password check funtion 
    function checkConfirmPassword (e){
        setConfirmPassword(e.target.value)
        if(e.target.value != password){
            setConfirmPasswordErorr ("Passwords dont match") ;
        }
        else{
            setConfirmPasswordErorr("");
        }
        
    }

    return (
        <div>
            <form >
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ checkFName} />
                    <h5>{firstNameErorr}</h5>
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ checkLName} />
                    <h5>{LastNameErorr}</h5>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ checkEmail } />
                    <h5>{emailErorr}</h5>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ checkPassword } />
                    <h5>{passwordErorr}</h5>
                </div>
                <div>
                    <label>confirm Password: </label>
                    <input type="password" onChange={ checkConfirmPassword } />
                    <h5>{confirmPasswordErorr}</h5>
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