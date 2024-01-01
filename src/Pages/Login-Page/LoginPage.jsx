import {useState } from 'react'
import React from 'react';
import {db} from '../../firebaseinit'
import { collection,addDoc} from "firebase/firestore"; 
import loginCss from './loginCss.module.css'



function LoginPage() {
    
    const [formData,setFormData]=useState({email:"",password:""})
    const [emailData,setEmailData]=useState([])


    async function handleSubmit(e){
      e.preventDefault();
      setEmailData([{email:formData.email,password:formData.password},...emailData])

      // Add a new document with a generated id. 
      const docRef = await addDoc(collection(db, "emailData"), {
      email: formData.email,
      password: formData.password,  
      createdOn:new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      
      
      setFormData({email:"",password:""})
      console.log(emailData)
      
    }


  return (
    <div className={loginCss.main}>
        <div className={loginCss.container}>
        <h1 className={loginCss.head}>Login Page</h1> 
          <form onSubmit={handleSubmit}>
            
            <input className={loginCss.email} type='email' placeholder='enter your email' value={formData.email} onChange={(e)=>setFormData({email:e.target.value, password: formData.password})}/>

            <br/>
            <input className={loginCss.pass} type='password' placeholder='enter your password' required value={formData.password} onChange={(e)=>setFormData({email: formData.email, password:e.target.value})}></input>
            <br/>
            <button className={loginCss.btn}>Login</button>
            </form>
        </div>     
    </div>
  )
}

export default LoginPage
