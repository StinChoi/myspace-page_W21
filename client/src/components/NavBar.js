import { Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {

  const { authenticated, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const useRouteMatch = (passes) => {
    const { pathname } = useLocation();

    for (let i = 0; i < passes.length; i += 1) {
      const pass = passes[i];
      const possibleMatch = matchPath(pass, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  }

  const routeMatch = useRouteMatch(["/", "/public", "/protected", "/login", "/posts", "/users"]);
  const currentTab = routeMatch?.pass?.path;

  if (!authenticated) {
    return (
      <div style={styles.container} >
        <Tabs value={currentTab}>
          <Tab label="Public" value="/public" to="/public" component={Link} />
          <Tab label="Login" value="/login" to="/login" component={Link} />
        </Tabs>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <Tabs value={currentTab}>
        <Tab label="Home" value="/" to="/" component={Link} />
        <Tab label="Users" value="/users" to="/users" component={Link} />
        <Tab label="Posts" value="/posts" to="/posts" component={Link} />
        <Tab label="Settings" value="/protected" to="/protected" component={Link} />
        <Tab label="Logout" onClick={() => handleLogout(navigate)} />
      </Tabs>
    </div>
  );
};

export default NavBar;

const styles = {
  container: {
    display: 'flex',
    border: '1.5px solid'
  },
  link: {
    textDecoration: "none",
    margin: "15px",
    color: "blue",
  }
}