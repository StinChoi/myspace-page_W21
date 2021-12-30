import React from "react";
import { Card, CardActions, CardContent, CardHeader, Icon, IconButton, Typography } from "@mui/material";

const Post = (props) => {

  const { user, post } = props;

  return (
    <Card elevation={3} >
      <CardHeader
        title={user.username}
        subheader={user.name} />
      <CardContent>
        <Typography variant="body1" >{post.content}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <label>{post.likes} likes</label>
      </CardActions>
    </Card>
  );
};

export default Post;