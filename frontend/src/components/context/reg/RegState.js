import React, { useState } from "react";
import RegContext from "./RegContext";

const RegState = (props) => {
    const [register, setRegister] = useState([]);

    const addReg = async (register) => {
        console.log("add reg", register);
        const response = await fetch(`http://localhost:5000/api/reg/reg-client`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(register)
        })
        const json = response.json();
        console.log(json)
        const addin = {
            "firstName": register.firstName,
            "lastName": register.lastName,
            "email": register.email,
            "date": register.date,
            "category": register.category,
            "_id": "64faa7a148481840c778deef",
            "createdAt": "2023-09-08T04:48:33.498Z",
            "updatedAt": "2023-09-08T04:48:33.498Z",
            "__v": 0
        }
        setRegister(addin)
        alert("Client registered Successfully")

    }
    return (
        <RegContext.Provider value={{ addReg }}>{props.children}</RegContext.Provider>


    )
}
export default RegState;