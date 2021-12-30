
// This page would be used to see the info while logged in
// import { useContext } from 'react';
// import { AuthContext } from '../providers/AuthProvider';


// const Protected = () => {

//   const auth = useContext(AuthContext);

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>email: {auth.email}</p>
//       <p>{JSON.stringify(auth)}</p>
//       {auth.authenticated && <p>Login Successful</p>}
//       {!auth.authenticated && <p>ERROR</p>}
//     </div>
//   );
// };

// export default Protected;

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import styled from "styled-components";

const Protected = () => {

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState(auth.username ? auth.username : "");
  const [name, setName] = useState(auth.name ? auth.name : "");
  const [email, setEmail] = useState(auth.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted ", username, name, email);
    auth.handleUpdate({ username, email, name, id: auth.id }, navigate);
  };

  return (
    <PageDiv>
      <Typography component="div" gutterBottom variant="h3" >Settings</Typography>
      <Paper sx={{ padding: "20px" }} component="div" elevation={2} >
        <Typography variant="subtitle1" >Edit your profile</Typography>
        <Box sx={{ width: "75vw", padding: "10px", margin: "auto" }} component="form" autoComplete="off" onSubmit={handleSubmit} >
          <TextField
            fullWidth
            margin="normal"
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <TextField
            fullWidth
            margin="normal"
            id="name"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <TextField
            fullWidth
            margin="normal"
            id="username"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <Button variant="contained" type="submit" >Submit</Button>
        </Box>
        <Button variant="contained" color="error" onClick={() => auth.handleDelete(navigate)} >Delete</Button>
      </Paper>
    </PageDiv>
  );
};

const PageDiv = styled.div`
    padding: 10px;
    margin: 30px 10px;
    text-align: center;
`;

export default Protected;