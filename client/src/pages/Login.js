import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("dummydata@mail.com")
  const [password, setPassword] = useState("123456")
  const handleSubmit = (e) => {
    e.preventDefault();

    // handleRegister in AuthProvider
    // console.log({ email, password }); 
    // You don't want to log this information, you want to pass it to the function
    handleLogin({ email, password }, navigate);
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;