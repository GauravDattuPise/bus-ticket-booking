
import React, { useState } from "react";
import { CustomInput } from "../../customBtnAndInput/customInput/customInput";


export function SignUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")

    return (
        <div className="container-fluid">
            <h2>Sign Up</h2>
            <form>
                <CustomInput
                    placeholder="Enter Firstname"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <CustomInput
                    placeholder="Enter Lastname"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <CustomInput
                    placeholder="Enter Email"
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <CustomInput
                    placeholder="Enter password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <CustomInput
                    placeholder="Confirm password"
                    value={confirmPassword}
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <CustomInput
                    placeholder="Enter Phone No"
                    value={phone}
                    type="number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <select
                    className="gender form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                    <CustomInput
                         value={dob}
                         type="date"
                         onChange={(e)=>setDob(e.target.value)}
                         required
                    />

                    <button className="bg-danger mt-3">Register</button>
            </form>
        </div>
    )
}