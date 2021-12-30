import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Register from './Register';


const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, authenticated } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // handleRegister in AuthProvider
    // console.log({ email, password }); 
    // You don't want to log this information, you want to pass it to the function
    handleLogin({ email, password }, navigate);
  }

  const toggleShow = () => {
    setShow(!show);
  }

  if (authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>New user? Register here</p>
      <button onClick={toggleShow} >{show ? "Cancel" : "Register"}</button>
      {show && <Register />}
    </div>
  );
};

export default Login;