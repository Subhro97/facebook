import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Grid } from "@material-ui/core";
import ImageAvatars from "./ImageAvatars";
import Comment from "./Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "592px",
    background: "#242526",
    color: "#e4e6eb",
    borderRadius: "6px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    paddingBottom: "0px",
    paddingTop: "0px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    cursor: "pointer",
  },

  item: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
    marginLeft: "8px",
  },
  camera: {
    width: "100%",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",

    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
      borderRadius: "50%",
    },
  },
  size: {
    width: "25px",
    height: "25px",
  },
  hover: {
    width: "65px",
    height: "38px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "5px",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
      borderRadius: "6px",
    },
  },
  thumb: {
    width: "30%",
  },
  post_input: {
    boxSizing: "border-box",
    background: "#b0b3b8",
    width: "490px",
    height: "40px",
    background: "#3a3b3c",
    margin: "2.5px 3.5px 3.5px",
    borderBottomRightRadius: "18px",
    borderBottomLeftRadius: "18px",
    borderTopRightRadius: "18px",
    borderTopLeftRadius: "18px",
    outline: "none",
    border: "none",
    padding: "10px",
    fontSize: ".9375rem",
    color: "#e4e6eb",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
  },
  grid: {
    display: "flex",
    background: "#242526",
    boxSizing: "border-box",
    padding: "8px 8px 8px",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
    width: "100%",
  },
  border: {
    border: "0.5px solid grey",
    width: "94%",
    position: "relative",
    left: "16px",
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
  change: {
    marginRight: "-4px",
  },
  space: {
    "& > *:first-child": {
      marginRight: "5px",
    },
  },
  video:{
    width: '100%',
    height: '100%',
  },
}));

let white = "#e4e6eb";
let blue = "#2d86ff";

export default function Post(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState(false);
  const [value, setValue] = useState("0");
  const [comment, setComment] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const clickHandler = (e) => {
    let thumb = e.currentTarget;
    let col = thumb.style.color;

    if (color) {
      thumb.parentNode.childNodes[1].style.color = blue;
      thumb.style.color = blue;
      setColor(true);
    } else {
      thumb.parentNode.childNodes[1].style.color = white;
      thumb.style.color = white;
      setColor(false);
    }
  };

  const inputHandler = (index) => (e) => {
    if (e.key === "Enter") {
      let val = e.target.value;
      let newArr = [...comment];
      newArr[index] = { id: index, com: val };
      setComment(newArr);
      setValue((val) => val + 1);
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src={props.pic} className={classes.avatar} />
        }
        action={
          <div className={classes.item}>
            <div className={classes.camera}>
              <MoreHorizRoundedIcon
                className={classes.pos}
                style={{ color: "#b0b3b8" }}
              />
            </div>
          </div>
        }
        title={props.name}
        subheader={<span style={{ color: "#e4e6eb" }}>26 August, 2021</span>}
      />
      <CardContent>
        <Typography variant="body2" color="#e4e6eb" component="p">
          {props.post}
        </Typography>
      </CardContent>
      {props.comp === "video" ? (
        <video src={props.media} className={classes.video} type='video/mp4' controls/>
      ) : (
        <CardMedia className={classes.media} image={props.media} />
      )}

      <CardActions
        disableSpacing
        style={{ display: "flex", paddingBottom: "2px" }}
      >
        <div className={clsx(classes.hover, classes.thumb)}>
          <IconButton aria-label="add to favorites" style={{ display: "flex" }}>
            <ThumbUpAltRoundedIcon
              style={{ color: "#e4e6eb" }}
              onClick={clickHandler}
            />
            <span
              style={{
                color: "#e4e6eb",
                fontSize: ".9375rem",
                fontWeight: "600",
                paddingLeft: "6px",
              }}
            >
              Like
            </span>
          </IconButton>
        </div>
        <div className={clsx(classes.hover, classes.thumb)}>
          <IconButton
            aria-label="add to favorites"
            style={{ display: "flex" }}
            onClick={handleExpandClick}
          >
            <ChatBubbleOutlineOutlinedIcon style={{ color: "#e4e6eb" }} />
            <span
              style={{
                color: "#e4e6eb",
                fontSize: ".9375rem",
                fontWeight: "600",
                paddingLeft: "6px",
              }}
            >
              Comment
            </span>
          </IconButton>
        </div>
        <div className={clsx(classes.hover, classes.thumb)}>
          <IconButton aria-label="share" style={{ display: "flex" }}>
            <ShareIcon style={{ color: "#e4e6eb" }} />
            <span
              style={{
                color: "#e4e6eb",
                fontSize: ".9375rem",
                fontWeight: "600",
                paddingLeft: "6px",
              }}
            >
              Share
            </span>
          </IconButton>
        </div>
        <IconButton aria-expanded={expanded} aria-label="show more">
          <div className={classes.hover}>
            <Avatar
              alt="Remy Sharp"
              src='/Images/spider.jpg'
              className={clsx(classes.avatar, classes.size)}
            />
            <ArrowDropDownRoundedIcon style={{ color: "#e4e6eb" }} />
          </div>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className={classes.border} />
        {comment &&
          comment.map((item) => (
            <Comment
              key={comment.id}
              pic={props.pic}
              name={props.name}
              comment={comment.com}
            />
          ))}

        <CardContent className={classes.comments}>
          <Grid container justifyContent="center">
            <Grid item xs={12} className={classes.grid} spacing={1}>
              <ImageAvatars image='/Images/spider.jpg'/>
              <input
                className={classes.post_input}
                placeholder={`Write a comment...`}
                onKeyDown={inputHandler(value)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
