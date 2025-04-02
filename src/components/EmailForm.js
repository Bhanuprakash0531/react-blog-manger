import React from "react";
import { useState } from "react";

function EmailForm({headerText}){
    const [email,setemail]=useState("");
    // function handleSubmit(){
    //     console.log('handleSubmit function called');
    // }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!email.trim()) return;
        console.log('Email submitted:',email);
        console.log('Header text:',headerText);
    }

    return(
        <div className="email-form-container">
            <h2>{headerText || 'Welcome to blog Manager'}</h2>
            <p>Please enter your email to access your blog post</p>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Enter your email"
                required
                />
                <button type="submit">Continue</button>
            </form>
        </div>
    )
}
export default EmailForm;