import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Typography from "@mui/material/Typography";
import { Box, Icon, Paper } from "@mui/material";
import styled from "styled-components";
import NewPost from "../components/NewPost";
import Post from "../components/Post";


const Home = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState(null);

  useEffect(() => {
    getMyPosts();
  }, [])

  const getMyPosts = async () => {
    try {
      let res = await axios.get("/api/posts");
      setMyPosts(res.data);
    } catch (err) {
      console.log(err.response);
      alert("error getting posts")
    }
  }

  const addPost = (post) => {
    setMyPosts([...myPosts, post]);
  };

  const renderPosts = () => {
    return myPosts.map((p) => {
      return (
        <div style={{ width: "500px", margin: "20px" }}>
          <Post user={auth} post={p} />
        </div>
      );
    });
  };

  return (
    <HomeDiv>
      <h1>MySpace</h1>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4">Home Page</Typography>
      </div>
      <Typography sx={{ textAlign: "center" }} variant="h5" gutterBottom>Welcome, {auth.name}</Typography>
      <div>
        <Paper sx={{ width: "70vw", display: "flex", justifyContent: "flex", padding: "10px" }} component="div" elevation={2} >
          <div style={{ textAlign: "left" }} >
            <Typography variant="h4" component="div" gutterBottom>{auth.username}</Typography>
            <Typography variant="body1" component="div" gutterBottom>{auth.email}</Typography>
          </div>
        </Paper>
      </div>
      {/* {JSON.stringify(auth)}
      <br />
      <button onClick={auth.handleLogin}>Login</button>
      <br />
      <button onClick={auth.handleLogout}>Logout</button>
      <br />
      <button onClick={() => navigate("/public")}>Public Page</button>
      <br />
      <Link to='/protected'>Protected</Link> */}
      <NewPost addPost={addPost} />
      {myPosts && renderPosts()}
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  padding: 10px;
  margin: 25px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;