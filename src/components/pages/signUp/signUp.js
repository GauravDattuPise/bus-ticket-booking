
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { CustomInput } from "../../customBtnAndInput/customInput/customInput";
import axios from "axios"
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./signUp.css"

import { isValidEmail, isValidName, isValidPhone, isValidPassword } from "../validations/validation";
import { Home } from "../home/home";

export function SignUp() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [firstNameMessage, setFirstNameMessage] = useState("")

    const [lastName, setLastName] = useState("")
    const [lastNameMessage,setLastNameMessage] = useState("")

    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("")

    const [password, setPassword] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("")

    const [phone, setPhone] = useState("")
    const [phoneMessage, setPhoneMessage] = useState("")

    const [gender, setGender] = useState("")
    const [genderMessage, setGenderMessage] = useState("")

    const [dob, setDob] = useState("")

   async function handleSubmit(e){
        e.preventDefault();

        if(!isValidName(firstName)){
            setFirstNameMessage("Enter valid first name")
            return;
        }
        if(!isValidName(lastName)){
            setLastNameMessage("Enter valid last name")
            return;
        }
        if(!isValidEmail(email)){
            setEmailMessage("Enter valid email")
            return;
        }
        if(!isValidPassword(password)){
            setPasswordMessage("Enter valid password")
            return
        }
        if(password !== confirmPassword){
            setConfirmPasswordMessage("Password didn't matched");
            return;
        }
        if(!isValidPhone(phone)){
            setPhoneMessage("Enter valid phone No");
            return;
        }
        if(gender === ""){
            setGenderMessage("Select gender")
            return;
        }
        const signUpData = {firstName,lastName,email,password,phone,gender,dob}

        console.log({...signUpData})

     try {
        const response = await axios.post("http://localhost:5000/createUser",signUpData)
        
           if(response.data.status){
            toast.success(response.data.message)
           }
           else{
            toast.error(response.data.message)
           }
        
        // else{
        //     console.log("this is error");
        //     toast.error(response.data.message)
        // }
        // toast.success(response.data.message)

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setGender(""); 
        setDob("")

    //    setTimeout(()=>{
        navigate("/login")
    //    },2000)


     } catch (error) {
        toast.error("Error In Registration !")
        console.log("error is occured", error.message)
     }
      
    }

    return (
      <div id="banner">
        <div className="container" >
            <form onSubmit={handleSubmit} className="form-ctrl">
            <h2>Register User</h2>
               
                <CustomInput
                    placeholder="Enter Firstname"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                {
                    !isValidName(firstName) ? 
                    (<span className="error-message">{firstNameMessage}</span>) : 
                    (<span></span>)
                }

                <CustomInput
                    placeholder="Enter Lastname"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                {
                    !isValidName(lastName) ?
                    (<span style={{color : "red"}}>{lastNameMessage}</span>) :
                    (<span></span>)
                }

                <CustomInput
                    placeholder="Enter Email"
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {
                    !isValidEmail(email) ?
                    (<span style={{color : "red"}}>{emailMessage}</span>) :
                    (<span></span>)
                }

                <CustomInput
                    placeholder="Enter password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {
                    !isValidPassword(password) ?
                    (<span style={{color : "red"}}>{passwordMessage}</span>) :
                    (<span></span>)
                }

                <CustomInput
                    placeholder="Confirm password"
                    value={confirmPassword}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {
                    password !== confirmPassword ?
                    (<span style={{color : "red"}}>{confirmPasswordMessage}</span>) :
                    (<span></span>)
                }

                <CustomInput
                    placeholder="Enter Phone No"
                    value={phone}
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                {
                    !isValidPhone(phone) ?
                    (<span style={{color : "red"}}>{phoneMessage}</span>) :
                    (<span></span>)
                }

                <select
                    className="gender-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                {
                    gender === "" ?
                    (<span style={{color : "red"}}>{genderMessage}</span>) :
                    (<span></span>)
                }

                    <CustomInput
                         value={dob}
                         type="date"
                         onChange={(e)=>setDob(e.target.value)}
                         required
                    />
                    <button type="submit" className="mt-4">register</button>

                    <NavLink to="/login" className="mt-3">Already registerd! Login here</NavLink>
            </form>
        </div>
        </div>
    )
}