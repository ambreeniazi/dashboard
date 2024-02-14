import React, { useState } from "react";

const SignUp = () => {
  const [info,setInfo]=useState({name:"",email:"",password:""})

    const handleSignUp= async()=>{
    console.log(info.name,info.email,info.password)
    const result = await fetch('http://localhost:5000/signup',{
      method:"POST",
      body:JSON.stringify({name : info.name, email: info.email, password: info.password}),  
       headers:{
       'Content-Type': 'application/json'
      }
    });
    const response = await(result.json()); 
      console.log(response)
    }
    
    
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold">Register</h1>
      </div>

      <div className="flex justify-center p-8">
        <div className="w-96 px-4 py-2 bg-gray-100 rounded-md">
          <input
            className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            onChange={(e)=>setInfo({...info,name:e.target.value})}
            value={info.name}
            placeholder="Enter name"
          />
          <input
            className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Enter Email"
            onChange={(e)=>setInfo({...info,email:e.target.value})}
            value={info.email}
          />
          <input
            className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            placeholder="Enter password"
            onChange={(e)=>setInfo({...info,password:e.target.value})}
            value={info.password}
          />
           <button onClick={handleSignUp} className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"type="button" >Sign Up </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
