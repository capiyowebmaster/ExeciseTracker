import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {useForm} from "react-hook-form"

 const CreateUser=()=>{ 
  const [username,setUsername]= useState("");


  async function myApi(){
    const {data}=await axios.post( 'http://localhost:5000/users/add', username)
    .then(res => console.log(res.data));
      setUsername("")
  }
  useEffect(()=>{
    myApi()
  })

   
  
  const  handelSubmit=(e)=> {
    e.preventDefault();
  
  }
  

    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={handelSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={username}
                onChange={e=>setUsername(e.target.value)}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
}
export default CreateUser
  
