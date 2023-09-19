import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import "./Register.css"
import RegContext from '../context/reg/RegContext';

function Register() {
    const context = useContext(RegContext)
    const { addReg } = context;
    const [inputState, setInputState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        category: '',
    })
    const { firstName, lastName, email, date, category } = inputState;
    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        addReg(inputState)
        console.log(inputState)
        setInputState({
            firstName: '',
            lastName: '',
            email: '',
            date: '',
            category: '',
        })
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="container1">
                    <h1 className='reg'>Register to Fitness Studio</h1>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter your first name"
                            name="firstName"
                            value={firstName}
                            onChange={handleInput('firstName')}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            name="lastName"
                            value={lastName}
                            onChange={handleInput('lastName')}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            name="email"
                            value={email}
                            onChange={handleInput('email')}
                        />
                    </div>

                    <div className="form-group">
                        <label>Start Date:</label>
                        <DatePicker
                            id="date"
                            placeholderText="Enter a date"
                            selected={date}
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => setInputState({ ...inputState, date: date })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Package:</label>
                        <select
                            required
                            value={category}
                            name="pack"
                            id="category"
                            onChange={handleInput('category')}
                        >
                            <option value="" disabled>
                                Select Option
                            </option>
                            <option value="regular">Regular</option>
                            <option value="premium">Premium</option>
                            <option value="standard">Standard</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register" />
                        <button><Link to="/">Home</Link></button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default Register
