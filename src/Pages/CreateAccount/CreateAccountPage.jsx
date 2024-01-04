// CreateAccountPage.js
import React, { useState } from 'react';
import { db } from '../../firebaseinit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import loginCssCreate from './loginCssCreate.module.css'
import { Link } from 'react-router-dom';

function CreateAccountPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(db, email, password);
            alert.log("Account created successfully");
            navigate('/');
        } catch (error) {
            alert("creation failed:", error.message);
        }
    };

    return (
        <div>
           <div className={loginCssCreate.container}>
           <h1>Create Your Account</h1>
            <form onSubmit={(e) => handleCreateAccount(e)}>
                <input className={loginCssCreate.email}
                    type='email'
                    name='email'
                    placeholder='enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <input className={loginCssCreate.password}
                    name='password'
                    type='password'
                    placeholder='enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                    <button className={loginCssCreate.createbtn} >Create Account</button>
            </form>
        </div>
        </div>
    );
}

export default CreateAccountPage;
