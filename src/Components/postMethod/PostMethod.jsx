import React, { useState } from "react";
import axios from "axios";
import './PostMethod.css'
function PostMethod() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        phonenumber: ''
    });

    const { name, email, password, phonenumber } = state;

    const Submit = (e) => {
        e.preventDefault();
        addPosts(state);
    };
    const handleInputChange = (e, value) => {
        setState({ ...state, [value]: e.target.value }); 
    };

    const addPosts = (state) => {
        axios
            .post(`${import.meta.env.VITE_API_FAKE_URL}/fakeData`, { 
                state })
            .then((res) => {
                console.log("Post added successfully:", res.data);
                setState({
                    name: '',
                    email: '',
                    password: '',
                    phonenumber: ''
                }); 
            })
            .catch((error) => {
                console.error("Error adding post:", error);
            });
    };

    

    return (
        <form onSubmit={Submit}>
            <h2>Signup</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e, 'name')} 
                placeholder="Enter name"
            />
            <input
                type="text"
                value={email}
                onChange={(e) => handleInputChange(e, 'email')} 
                placeholder="Enter email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, 'password')}
                placeholder="Enter password"
            />
            <input
                type="text"
                value={phonenumber}
                onChange={(e) => handleInputChange(e, 'phonenumber')} 
                placeholder="Enter phone number"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostMethod;
