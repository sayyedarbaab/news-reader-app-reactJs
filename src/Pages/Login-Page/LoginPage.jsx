import React, { useState } from 'react';
import { db } from '../../firebaseinit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import loginCss from './loginCss.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
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
        <div className={loginCss.container}>
        <h1>LOGIN PAGE</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input className={loginCss.email}
                    type='email'
                    name='email'
                    placeholder='enter your email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <input className={loginCss.password}
                    name='password'
                    type='password'
                    placeholder='enter your password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                /><br />

                <button className={loginCss.btn}>Login</button>

                <Link to='/CreateAccount'>
                    <button className={loginCss.createbtn} >Create Account</button>
                </Link>
            </form>
        </div>
    )
}

export default LoginPage;

