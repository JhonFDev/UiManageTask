import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  ToastContainer } from "react-toastify";

export default function Register() {
  const [values, setValues] = useState({
    user: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post("http://localhost:5000/register", {
        ...values,
      },
      {
        withCredentials:true
      });
      console.log(data)
      if(data) {
        if(data.errors){
        }else{
        }
      }
    } catch (error) {
      console.log(error)
    }    
  }
  return (
    <div className="viewcontainer">
      <h2>Registro de Usuario</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="user">Usuario</label>
          <input type="user" name="user" placeholder="Ingresar Usuario" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingresar Contraseña"
          />
        </div>
        <button type="submit">Registrarse</button>
        <span>
          Ya tienes una cuenta? <Link to="/login">Inicia sesion</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}
