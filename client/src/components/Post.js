import React from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, Icon, IconButton, Typography } from "@mui/material";

const Post = (props) => {

  const {user, post} = props;

  return (
    <Card elevation={3} >
      <CardHeader
      avatar ={
        <Avatar>
          <Icon>person</Icon>
        </Avatar>
      }
      title={user.username}
      subheader={user.name} />
      <CardContent>
        <Typography variant="body1" >{post.content}</Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  )
}