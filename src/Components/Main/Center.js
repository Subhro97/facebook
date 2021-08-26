import { Fragment, useState } from "react";

import { alpha, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { green, yellow } from "@material-ui/core/colors";
import clsx from "clsx";
import Nbackdrop from "../UI/Nbackdrop";
import ImageAvatars from "../UI/ImageAvatars";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxSizing: "border-box",
    padding: "1px",
  },
  box: {
    boxSizing: "border-box",
  },

  paper: {
    height: "198.4px",
    width: "111.6px",
    borderRadius: "8px",
    backgroundImage: `url(${"https://i.pinimg.com/originals/ba/75/8e/ba758e7f4db9405430e6ff651622a03d.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    cursor: "pointer", 
  },

  paper_2: {
    backgroundImage: `url(${"https://w0.peakpx.com/wallpaper/959/836/HD-wallpaper-captain-america-avenger-shield-steve-rogers.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  paper_3: {
    backgroundImage: `url(${"https://wallpapercave.com/wp/wp2720041.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  paper_4: {
    backgroundImage: `url(${"https://wallpapercave.com/wp/wp4273083.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  paper_5: {
    backgroundImage: `url(${"https://mcdn.wallpapersafari.com/medium/94/17/ioOz2G.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  container: {
    background: "#18191a",
    width: "799.2px",
    height: "660px",

    paddingLeft: "32px",
    paddingRight: "32px",
    display: "flex",
    justifyContent: "center",
  },

  inner_container: {
    boxSizing: "border-box",
    maxWidth: "100%",
    width: "100%",
    height: "69%",
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  stories: {
    width: "630px",
    height: "230.4px",
    maxWidth: "100%",
    paddingTop: "24px",
    paddingBottom: "24px",
  },

  posts: {
    width: "630px",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

  inner_post: {
    width: "500px",
    maxWidth: "100%",
  },

  create_post: {
    marginBottom: "16px",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "12px",
    paddingBottom: "10px",
    display: "flex",
    alignItems: "center",
  },

  grid: {
    display: "flex",
    background: "#242526",
    boxSizing: "border-box",
    padding: "8px 8px 8px",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
  },

  acc_icon: {
    color: "white",
    width: "36px",
    height: "40px",
    boxSizing: "border-box",
    paddingTop: "3.5px",
    cursor: "pointer",
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
    cursor: "pointer",
    fontSize: "1.0625rem",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
  },
  border: {
    border: "0.1px solid grey",
    width: "94%",
    position: "relative",
    left: "12px",
  },
  acc_new: {
    borderBottomRightRadius: "6px",
    borderBottomLeftRadius: "6px",
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    display: "flex",
    flexDirection: "column",
    paddingTop: "2px",
  },
  secound_input: {
    display: "flex",
    padding: "10px 10px 10px 10px",
  },
  item: {
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.2),
    },
  },
}));

const Center = (props) => {
  const classes = useStyles();
  const [flag, setFlag] = useState(false);

  const postHandler = () => {
    setFlag((flag) => !flag);
  };

  return (
    <Fragment>
      {flag && <Nbackdrop onClick={postHandler} />}
      <div className={classes.container}>
        <div className={classes.inner_container}>
          <div className={classes.stories}>
            <Grid container className={classes.root} spacing={1}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                  <Grid item>
                    <Paper className={classes.paper} />
                  </Grid>
                  <Grid item>
                    <Paper className={clsx(classes.paper, classes.paper_2)} />
                  </Grid>
                  <Grid item>
                    <Paper className={clsx(classes.paper, classes.paper_3)} />
                  </Grid>
                  <Grid item>
                    <Paper className={clsx(classes.paper, classes.paper_4)} />
                  </Grid>
                  <Grid item>
                    <Paper className={clsx(classes.paper, classes.paper_5)} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className={classes.posts}>
            <div className={classes.create_post}>
              <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12}>
                  <Grid container justifyContent="center">
                    <Grid item xs={10} className={classes.grid} spacing={1}>
                      <ImageAvatars image={props.pic} />
                      <input
                        className={classes.post_input}
                        placeholder={`What's on your mind, ${props.name}?`}
                        readOnly="readonly"
                        onClick={postHandler}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      className={clsx(classes.grid, classes.acc_new)}
                      spacing={1}
                    >
                      <div className={classes.border} />
                      <div className={classes.secound_input}>
                        <div
                          style={{ boxSizing: "border-box", display: "flex" }}
                        >
                          <div
                            className={classes.item}
                            style={{ width: "140px" }}
                          >
                            <VideoCallRoundedIcon
                              color="secondary"
                              style={{ fontSize: "30px" }}
                            />
                            <span
                              style={{
                                marginLeft: "2px",
                                fontSize: ".9375rem",
                                fontWeight: "600",
                                color: "#b0b3b8",
                              }}
                            >
                              Live Video
                            </span>
                          </div>
                          <div
                            className={classes.item}
                            style={{ width: "160px" }}
                          >
                            <AddPhotoAlternateRoundedIcon
                              style={{ color: green[500], fontSize: "30px" }}
                            />
                            <span
                              style={{
                                marginLeft: "2px",
                                fontSize: ".9375rem",
                                fontWeight: "600",
                                color: "#b0b3b8",
                              }}
                            >
                              Photos/Videos
                            </span>
                          </div>
                          <div
                            className={classes.item}
                            style={{ width: "156px" }}
                          >
                            <EmojiEmotionsOutlinedIcon
                              style={{ color: yellow[500], fontSize: "30px" }}
                            />
                            <span
                              style={{
                                marginLeft: "2px",
                                fontSize: ".9375rem",
                                fontWeight: "600",
                                color: "#b0b3b8",
                              }}
                            >
                              Feeling/Activity
                            </span>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Center;
