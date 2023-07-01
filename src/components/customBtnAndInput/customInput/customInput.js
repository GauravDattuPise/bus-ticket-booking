
import React from "react";
import "./customInput.css"

export function CustomInput({placeholder,select,type,value,onChange,required}){
    return(
        <input
            className="inputs form control"
            style={{width : "350px", height: "40px", border : "none",font : "18px", borderBlockEnd: "2px solid black"}}
            placeholder={placeholder}
            select={select}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
        />
    )
}