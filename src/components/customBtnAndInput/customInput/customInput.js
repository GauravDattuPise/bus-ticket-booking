
import React from "react";
import "./customInput.css"

export function CustomInput({placeholder,select,type,value,onChange,required}){
    return(
        <input
            className="inputs form control"
            placeholder={placeholder}
            select={select}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
        />
    )
}