import React, { useState } from "react";
import axios from "axios";
import './PostMethod.css'

function PostMethod() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const Submit = (e) => {
        e.preventDefault();
        addPosts(name, email, password, phonenumber);
    };

    const addPosts = (name, email, password, phonenumber) => {
        axios
            .post('https://660fa01d356b87a55c51d6dd.mockapi.io/Students', { name, email, password, phonenumber })
            .then((res) => {
                console.log("Post added successfully:", res.data);
                setName('');
                setEmail('');
                setPassword('');
                setPhonenumber('');
            })
            .catch((error) => {
                console.error("Error adding post:", error);
            });
    };

    return (
        <form onSubmit={Submit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />
            <input
                type="text"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                placeholder="Enter phone number"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostMethod;
