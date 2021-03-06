import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

const NewPost = (props) => {

  const { addPost } = props;
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let newPost = { content: content, likes: 0 };
      let res = await axios.post("/api/posts", newPost);
      addPost(res.data);
      setContent("");
    } catch (err) {
      console.log(err.response);
      alert("Error")
    }
  }

  return (
    <Box sx={{ width: "75vw", padding: "10px" }} component="form" autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        margin="normal"
        multiline
        maxRows={4}
        id="content"
        label="New post"
        value={content}
        onChange={(e) => setContent(e.target.value)} />
      <Button variant="contained" type="submit">Submit</Button>
    </Box>
  );
};

export default NewPost;