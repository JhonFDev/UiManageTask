import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toast, ToastContainer } from "react-toastify";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post("http://localhost:3000/register", {
        ...values,
      })
    } catch (error) {
      console.log(error)
    }    
  }
  return (
    <div className="viewcontainer">
      <h2>Registro de Usuario</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" placeholder="Ingresar Correo" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})}/>
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
