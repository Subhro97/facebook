import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: "2px",
    },
  },
}));

export default function ImageAvatars(props) {
  const classes = useStyles();

  let img = props.image;

  if (img === "") {
    img = "/Images/nop.jpg";
  }

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={img} className={props.style} />
    </div>
  );
}
