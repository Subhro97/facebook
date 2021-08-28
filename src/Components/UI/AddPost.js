import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CardHeader, makeStyles, alpha, Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import ImageAvatars from "./ImageAvatars";
import { Card } from "@material-ui/core";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";
import { green, yellow } from "@material-ui/core/colors";
import { display } from "@material-ui/system";
import { post } from "../Main/Center";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    margin: "20px",
    position: "relative",
    textAlign: "left",
    background: "#242526",
  },
  image: {
    position: "absolute",
    right: "10px",
    top: "15px",
    zIndex: "2",
    width: "30px",
    height: "30px",
    cursor: "pointer",
  },
  border: {
    border: "0.1px solid grey",
    borderColor: "#3d4045",
    width: "100%",
  },
  content: {
    fontSize: "1.5rem",
    color: "#e4e6ea",
    fontWeight: "400",
  },
  item: {
    width: "35px",
    height: "35px",
    cursor: "pointer",
    marginLeft: "8px",
  },
  camera: {
    width: "100%",
    height: "35px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",

    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
      borderRadius: "50%",
    },
  },
}));

function AddPosttemp(props) {
  const classes = useStyles();
  const [photo, setPhoto] = useState("");

  const newPostHandler = (e) => {
    if (e.key === "Enter") {
      post.unshift({
        id: Math.random().toFixed(2),
        pic: "/Images/spider.jpg",
        name: "Peter Parker",
        post: e.target.value,
        postmedia: "",
        com: "",
        likes: "",
      });
    }
  };

  return (
    <Card
      className={classes.container}
      style={{
        border: "0.2px solid grey",
        borderColor: "#3d4045",
        borderRadius: "8px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            height: "60px",
            width: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{ fontSize: "1.25rem", fontWeight: "700", color: "#e4e6eb" }}
          >
            Create Post
          </div>
          <img
            className={classes.image}
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/Q0G2UVjVQ4_.png"
            onClick={props.onClick}
          />
        </div>
        <div className={classes.border} />
        <div
          style={{ display: "flex", boxSizing: "border-box", padding: "10px" }}
        >
          <ImageAvatars image="/Images/spider.jpg" />
          <span
            style={{
              color: "#e4e6eb",
              fontSize: ".9375rem",
              fontWeight: "600",
              margin: "5px 0px 0px 3px",
            }}
          >
            Peter Parker
          </span>
        </div>
      </div>
      <div id="body" className={classes.body}>
        <textarea
          placeholder="What's on your mind, Peter?"
          style={{
            outline: "none",
            border: "none",
            resize: "none",
            width: "100%",
            background: "#242526",
            fontSize: "1.5rem",
            boxSizing: "border-box",
            padding: "0px 12px",
            color: "#e4e6eb",
            overflow: "hidden",
          }}
          onKeyDown={newPostHandler}
        />
        <div style={{ display: "flex", padding: "0px 10px" }}>
          <div style={{ width: "90%" }}>
            <img
              src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
              style={{ height: "38px", cursor: "pointer" }}
            />
          </div>
          <EmojiEmotionsOutlinedIcon
            style={{ fontSize: "30px", color: "#3d4045", cursor: "pointer" }}
          />
        </div>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          padding: "16px 16px",
          width: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "0.2px solid grey",
            borderColor: "#3d4045",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              padding: "16px",
              marginRight: "80px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "#e4e6eb",
                cursor: "pointer",
              }}
            >
              Add to Post
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes.item}>
              <div className={classes.camera}>
                <AddPhotoAlternateRoundedIcon
                  style={{ color: green[500], fontSize: "30px" }}
                />
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.camera}>
                <PersonAddRoundedIcon
                  style={{ color: "#2d88ff", fontSize: "30px" }}
                />
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.camera}>
                <EmojiEmotionsOutlinedIcon
                  style={{ color: yellow[500], fontSize: "30px" }}
                />
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.camera}>
                <LocationOnRoundedIcon
                  style={{ color: "#f5533d", fontSize: "30px" }}
                />
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.camera}>
                <MicRoundedIcon
                  style={{ color: "#f02849", fontSize: "30px" }}
                />
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.camera}>
                <MoreHorizRoundedIcon
                  className={classes.pos}
                  style={{ color: "#b0b3b8" }}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          style={{
            color: "#ffffff",
            background: "#2d88ff",
            width: "100%",
            fontSize: "0.9375rem",
            fontWeight: "600",
            borderRadius: "8px",
          }}
          onClick={props.onClick}
        >
          Post
        </Button>
      </div>
    </Card>
  );
}

const AddPost = (props) => {
  return ReactDOM.createPortal(
    <AddPosttemp onClick={props.onClick} />,
    document.getElementById("overlay-root")
  );
};

export default AddPost;
