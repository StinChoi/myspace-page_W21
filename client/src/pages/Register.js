import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Register = () => {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AuthContext);
  const [email, setEmail] = useState("dummydata@mail.com")
  const [password, setPassword] = useState("123456")
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      // let User know password does not match
      alert('Passwords Do Not Match');
      return;
    }

    // handleRegister in AuthProvider
    // console.log({ email, password }); 
    // You don't want to log this information, you want to pass it to the function
    handleRegister({ email, password }, navigate);
  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <p>Enter Password Again</p>
        <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <button>Create Account</button>
      </form>
    </>
  );
};

export default Register;