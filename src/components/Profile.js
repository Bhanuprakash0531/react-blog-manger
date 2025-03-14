import React, { useState, useEffect }  from "react";
import './profile.css';

function Profile(){
    const [name, setName]=useState('');
    useEffect(()=>{console.log('profile component rendered!',name)},[name]);

    const [age, setAge]=useState(0);
    useEffect(()=>{
        console.log('Name changed to: ',name);
        console.log('Age changed to:',age);
    },[name,age]);


    // Here connecting backend profile controller to frontend 
    const [profile, setProfile]=useState(null);
    useEffect(()=>{
    async function fetchData(){
        try{
            const response = await fetch("http://localhost:3001/api/profile");
            const data=await response.json();
            setProfile(data);
        }catch(error){
            console.log('error fetching data:',error);
        }
     }
     fetchData();
   },[]);
    
    return(
        <div>
        <div className="Profile">
            <h2>Profile</h2>
            <label>
                Username:
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </label>
            <br></br>
            <label>
                Age:
                <select value={age} onChange={(e)=>setAge(e.target.value)}>
                    <option value='' disabled>Choose your age</option>
                    {[...Array(87)].map((_,i)=>(<option key={i} value={i+18}>{i+18}</option>
                ))}
                </select>
            </label>
            <p>Welcome,{name|| 'Guest'} and my age is {age}</p>
        </div>
        {/*Here display's the data from backend to UI */}
        <div>
        {profile?(
            <div>
                <p>User:{profile.name}</p>
                <p>Role:{profile.role}</p>
            </div>
        ):(<p>Loading...</p>)}
    </div>
    </div>
    );
}
export default Profile;