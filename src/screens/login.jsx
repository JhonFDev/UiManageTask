import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toast, ToastContainer } from "react-toastify";
import axios from "axios"

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post("http://localhost:5000/login", {
        ...values,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="viewcontainer">
      <h2>Inicio de Sesión</h2>
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
        <button type="submit">Iniciar sesion</button>
        <span>
          No tienes una cuenta? <Link to="/register">Registrate ahora!</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

