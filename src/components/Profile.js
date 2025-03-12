import React, { useState, useEffect }  from "react";

function Profile(){
    const [username, setUsername]=useState('');
    useEffect(()=>{console.log('profile component rendered!',username)},[username]);
    
    return(
        <div style={{padding: "1rem"}}>
            <h2>Profile</h2>
            <label>
                Username:
                <input
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                style={{width: '50%'}}
                />
            </label>
            <p>Welcome,{username|| 'Guest'}</p>
        </div>
    );
}
export default Profile;