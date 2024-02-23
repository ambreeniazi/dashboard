import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login=()=>{
    const [info ,setInfo] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate();

    useEffect(() =>{
        const auth = localStorage.getItem('user');
        if(auth){
          navigate("/")
        }
       },[navigate])
  
        const handleLogin = async()=>{
    try{
         console.log(info.email, info.password)
         const result = await fetch('http://localhost:5001/login',{
            method:"POST",
            body:JSON.stringify({
                email : info.email,
                password:info.password, 
            }),
             headers:{
                 'Content-Type':'application/json'
             },
         }
         );
         const response = await result.json();
         console.log(response)
        if(response.name){
          localStorage.setItem("user",JSON.stringify(response));
          navigate('/')
          const  toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          toast.fire({
            icon: "success",
            title: "Login in successfully"
          });
        }else{
           alert("Please Enter correct detail") ;
        }}

    catch(error){
           throw error
    }
        }
    return(
        <>
       <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold">Login</h1>
      </div>
      <div className="flex justify-center p-8">
        <div className="w-96 px-4 py-2 bg-gray-100 rounded-md">
          <input
            className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            onChange={(e)=>setInfo({...info,email:e.target.value})}
            value={info.email}
            placeholder="Enter Email"
          />
          <input
            className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Enter Password"
            onChange={(e)=>setInfo({...info,password:e.target.value})}
            value={info.password}
          />
          <button
            onClick={handleLogin}
            className="w-full mb-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="button"
          >
            Login {" "}
          </button>
          </div>
          </div>
        </>
    )

}

export default Login