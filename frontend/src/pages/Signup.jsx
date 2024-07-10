import { useState } from 'react';
import axios from 'axios';

export const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/signup', formData);
            setMessage('User created successfully');
            // Redirect to signin page using window.location
            window.location.href = '/signin';
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="title">Sign Up</h2>
                {message && <div className="error-message">{message}</div>}
                <div className="mb-4">
                    <label htmlFor="username" className="label">Email</label>
                    <input
                        type="email"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="firstName" className="label">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="label">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="button"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};
