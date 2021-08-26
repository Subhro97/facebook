import { useContext } from "react";

import { alpha, makeStyles } from "@material-ui/core";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import ImageAvatars from "../UI/ImageAvatars";
import clsx from "clsx";

import AuthContext from "../../store/auth-context";

const array = [
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png",
    title: "Find Friends",
    id: "a1",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/y6/r/U_sRIAvZ0k2.png",
    title: "Jobs",
    id: "a2",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png",
    title: "Groups",
    id: "a3",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/ys/r/9BDqQflVfXI.png",
    title: "Marketplace",
    id: "a4",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png",
    title: "Watch",
    id: "a5",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/y7/r/AYj2837MmgX.png",
    title: "Memories",
    id: "a6",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yr/r/2uPlV4oORjU.png",
    title: "Saved",
    id: "a7",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png",
    title: "Pages",
    id: "a8",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png",
    title: "Events",
    id: "a9",
  },
];

const useStyles = makeStyles((theme) => ({
  left_container: {
    background: "#18191a",
    width: "360px",
    overflow: "hidden",
    height: "660px",
  },

  inner_container: {
    minHeight: "100%",
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
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

  arrow: {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    width: "36px",
    height: "40px",
    borderRadius: "50%",
    textAlign: "center",
  },

  expand: {
    color: "white",
    marginTop: "9px",
  },

  acc_icon: {
    color: "white",
    width: "36px",
    height: "40px",
  },

  item_another: {
    transform: "scale(.77777777)",
  },
}));

const Block = (props) => {
  const classes = useStyles();

  let item =
    props.iswanted === "true" ? classes.item_another : classes.item_one;
  return (
    <li>
      <div className={classes.blocks}>
        <div className={classes.items}>
          <div className={item}>
            {props.flag === "1" ? (
              <img
                src={props.src}
                style={{ height: "36px", width: "36px" }}
                alt=""
              />
            ) : props.flag === "2" ? (
              <ImageAvatars image={props.pic}/>
            ) : (
              <div className={classes.arrow}>
                <ExpandMoreSharpIcon className={classes.expand} />
              </div>
            )}
          </div>
          <div className={classes.item_two}>
            <span className={classes.title}>{props.title}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

const Lside = (props) => {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  return (
    <div className={classes.left_container}>
      <div className={classes.inner_container}>
        <ul className={classes.list}>
          <Block flag="2" title={props.name} iswanted="true" pic={props.pic} />
        </ul>

        <ul className={classes.list}>
          {array.map((item) => (
            <Block key={item.id} flag="1" src={item.src} title={item.title} />
          ))}
        </ul>
        <ul className={classes.list}>
          <Block flag="0" title="See more" />
        </ul>
      </div>
    </div>
  );
};

export default Lside;
