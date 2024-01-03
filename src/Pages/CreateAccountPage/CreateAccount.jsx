import React, { useState } from 'react';
import { db } from '../../firebaseinit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import loginCssCreate from './createaccount.module.css'
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const back = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(db, email, password).then(data => {
            console.log(data, "emailData");
            back('/');
        });
    }

    return (
        <div className={loginCssCreate.container}>
        <h1>CREATE YOUR ACCOUNT</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className={loginCssCreate.email}
                    type='email'
                    name='email'
                    placeholder='enter your email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <input className={loginCssCreate.password}
                    name='password'
                    type='password'
                    placeholder='enter your password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                    <button className={loginCssCreate.createbtn} >Create Account</button>
            </form>
        </div>
    )
}

export default CreateAccount;

