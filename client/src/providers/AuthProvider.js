import React, { useState } from 'react';
import axios from 'axios';

// (using AuthContext and useContext instead) as a functional component 
export const AuthContext = React.createContext()

// Most likely would not be using this - will use this incase I do a class component
export const AuthConsumer = AuthContext.Consumer

const AuthProvider = (props) => {
  // using null to tell if user is not logged in
  const [user, setUser] = useState(null);

  const handleRegister = async (user, navigate) => {
    // using axios call to register new user
    // setUser
    try {
      let res = await axios.post("api/auth", user);
      setUser(res.data.data);
      // navigate to a certain page when successfully created a new registration
      navigate("/protected");
    } catch (err) {
      console.log(err.response);
      alert("Error Occured While Registering User")
    }
  };

  const handleLogin = async (user, navigate) => {
    // using axios call to handle login
    try {
      let res = await axios.post("api/auth/sign_in", user);
      setUser(res.data.data);
      // navigate to a certain page when successfully created a new registration
      navigate("/protected");
    } catch (err) {
      console.log(err.response);
      alert("Error While Logging In")
    }
    // setUser
    // setUser({ email: "Silly Goose" });
    // console.log("handleLogin: ", user);
  };

  const handleLogout = async (y) => {
    // using axios call to handle logout
    try {
      // destroy token on backend
      let res = await axios.delete("api/auth/sign_out")
      console.log(res);
      setUser(null)
      y("/login");
      console.log("handleLogout")
    } catch (err) {
      console.log(err.response);
      alert("Error while Logging Out")
    }
  };

  return (
    <AuthContext.Provider value={{
      ...user,
      handleRegister,
      handleLogin,
      handleLogout,
      setUser,
      authenticated: user !== null,
      // creating a boolean helper
      // if User does not = null then authneticated would be true if not then it wont 
    }}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;