import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthContext } from "../providers/AuthProvider"
import { Box, CircularProgress, Typography } from "@mui/material";

const RequireAuth = () => {
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true)
  const auth = useContext(AuthContext)

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    // if we are authenticated or we do not have a token
    if (auth.authenticated || !localStorage.getItem("access-token")) {
      setCheckingAuthStatus(false);
      return;
    };
    // we have a token in local-storage, and are not authed
    // so we need to check the token = valid
    try {
      const res = await axios.get("api/auth/validate_token");
      auth.setUser(res.data.data)
    } catch (err) {
      // if token is invalid or error occurs - come here
      console.log('unable to validate token')
    } finally {
      setCheckingAuthStatus(false);
    }
  };

  if (checkingAuthStatus) {
    return <p>Checked if Logged in or Logged out</p>
  }
  // Checking to see if not auth
  if (!auth.authenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome {auth.email}!</h1>
      <Outlet />
    </div>
  )
};

export default RequireAuth;