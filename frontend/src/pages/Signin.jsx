import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
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
            // Simulated signin logic
            setMessage('Sign in successful');

            // Redirect to dashboard after successful signin
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1000); // Optional delay before redirection
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="signin-container">
            <div className="form-box">
                <h2 className="title">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="username">Email</label>
                        <input
                            type="email"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Sign In
                    </button>
                </form>
                {message && <div className="error-message">{message}</div>}
                <div className="create-account-link">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
};
