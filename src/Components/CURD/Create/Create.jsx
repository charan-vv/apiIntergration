import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import "../../postMethod/PostMethod.css"; // Make sure the path to your CSS file is correct

const Create = () => {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost(name, email, password, phonenumber);
    };

    const addPost = (name, email, password, phonenumber) => {
        axios
            .post('https://660fa01d356b87a55c51d6dd.mockapi.io/fakeData', { name, email, password, phonenumber })
            .then((res) => {
                console.log("Post added successfully:", res.data);
                // Reset form fields after successful submission
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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email-id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phonenumber">Phone Number</label>
                <input
                    type="tel"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Phone number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Create;
