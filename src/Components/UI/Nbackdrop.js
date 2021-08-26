import ReactDOM from "react-dom";

import classes from "./Nbackdrop.module.css";

const Ndrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
};

const NBackdrop = (props) => {
  return ReactDOM.createPortal(
    <Ndrop onClick={props.onClick}/>,
    document.getElementById("backdrop-root")
  );
};

export default NBackdrop;