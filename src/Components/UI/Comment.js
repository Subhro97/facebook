import React from "react";
import { makeStyles, alpha } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    cursor: "pointer",
  },
  content: {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    color: "#e4e6eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "10vw",
    height: "7vh",
    paddingLeft: "10px",
    borderRadius: "16px",
  },
  space: {
    "& > *:first-child": {
      marginRight: "5px",
    },
  },
}));

function Comment(props) {
  const classes = useStyles();
  return (
    <CardHeader
      style={{ paddingLeft: "24px" }}
      className={classes.space}
      avatar={
        <Avatar alt="Remy Sharp" src={props.pic} className={classes.avatar} />
      }
      subheader={
        <div className={classes.content}>
          <div style={{ fontWeight: "600", cursor: "pointer" }}>
            {props.name}
          </div>
          <div>{props.comment}</div>
        </div>
      }
    />
  );
}

export default Comment;
