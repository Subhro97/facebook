import { alpha, makeStyles } from "@material-ui/core";

import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Avatars from "../UI/Avatars";
import GroupAvatars from "../UI/Group";

import { friends } from "./friends";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#18191a",
    width: "360px",
    height: "660px",
  },

  inner_container: {
    paddingTop: "8px",
    width: "100%",
  },

  header_container: {
    boxSizing: "border-box",
    paddingBottom: "4px",
    paddingTop: "4px",
    maxWidth: "100%",
  },

  sub_header: {
    boxSizing: "border-box",
    maxWidth: "100%",
    paddingLeft: "16px",
    paddingRight: "16px",
    display: "flex",
  },

  header: {
    color: "#b0b3b8",
    fontWeight: "600",
    fontSize: "1.0625rem",
    maxWidth: "100%",
    width: "215px",
  },

  items: {
    display: "flex",
    maxWidth: "100%",
    marginLeft: "8px",
  },

  header_items: {
    display: "flex",
    marginTop: "-8px",
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

  chatbox: {
    paddingTop: "8px",
    paddingBottom: "8px",
  },

  blocks: {
    paddingLeft: "8px",
    paddingRight: "8px",
  },

  items: {
    display: "flex",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.1),
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  },

  item_one: {
    marginBottom: "4px",
    marginLeft: "0px",
    marginRight: "6px",
    marginTop: "4px",
    transform: "scale(.77777777)",
  },

  item_two: {
    boxSizing: "border-box",
    paddingTop: "12px",
    paddingBottom: "12px",
  },

  title: {
    color: "#e4e6eb",
    fontSize: ".9375rem",
    fontWeight: "500",
    textAlign: "left",
    lineHeight: "1.33333",
  },

  list: {
    listStyleType: "none",
    padding: "0px",
    margin: "0px",
  },

  acc_icon: {
    color: "white",
    width: "36px",
    height: "40px",
  },

  border: {
    border: "0.5px solid grey",
    width: "90%",
    position: "relative",
    left: "18px",
  },

  header_container_2: {
    boxSizing: "border-box",
    paddingBottom: "4px",
    paddingTop: "8px",
    maxWidth: "100%",
  },

  group: {
    paddingLeft: "1px",
  },
}));

 export const Block = (props) => {
  const classes = useStyles();
  let image = props.img;
  if(props.img === ''){
    image = '/Images/nop.jpg';
  }
  return (
    <li>
      <div className={classes.blocks}>
        <div className={classes.items}>
          <div className={classes.item_one}>
            <Avatars profile={image} />
          </div>
          <div className={classes.item_two}>
            <span className={classes.title}>{props.name}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

const Rside = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.inner_container}>
        <div className={classes.header_container}>
          <div className={classes.sub_header}>
            <div className={classes.header}>
              <span>Contacts</span>
            </div>
            <div className={classes.header_items}>
              <div className={classes.item}>
                <div className={classes.camera}>
                  <VideoCallRoundedIcon
                    className={classes.pos}
                    style={{ color: "#b0b3b8" }}
                  />
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.camera}>
                  <SearchIcon
                    className={classes.pos}
                    style={{ color: "#b0b3b8" }}
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
        </div>
        <div className={classes.chatbox}>
          <ul className={classes.list}>
            {friends.map((friend) => (
              <Block key={friend.id} name={friend.name} img={friend.profile} />
            ))}
          </ul>
        </div>
        <div className={classes.border} />
        <div className={classes.header_container_2}>
          <div className={classes.sub_header}>
            <div className={classes.header}>
              <span>Group Conversations</span>
            </div>
          </div>
        </div>
        <div className={classes.group}>
          <ul className={classes.list}>
            <Block name="Avengers" img='/Images/avengers.jpg'/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rside;
