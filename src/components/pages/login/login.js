import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomInput } from "../../customBtnAndInput/customInput/customInput";
import "./login.css"
import axios from "axios";
import { toast } from "react-hot-toast";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {

            const response = await axios.post("http://localhost:5000/loginUser", { email, password })

            if (response.data) {
                if (response.data.status) {
                    toast.success(response.data.message);
                    setTimeout(()=>{
                       navigate("/home")
                    },1750)
                }
                else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            toast.error("Error In Login")
            console.log("error is ", error.message);
        }

    }
    return (

        <div id="banner">
            <div className="login-container">

                <form className="login-form-ctrl" onSubmit={handleLogin}>

                    <h1 className="mb-4">Login User</h1>

                    {/* email input */}
                    <CustomInput
                        placeholder="Enter Your Email"
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    {/* password input */}
                    <CustomInput
                        placeholder="Enter Your Password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="mt-4">login</button>

                    <p className="p-4">
                        <NavLink to="/signUp">Do not have account! Go to register</NavLink>
                    </p>
                </form>
            </div>
        </div>
    )
}