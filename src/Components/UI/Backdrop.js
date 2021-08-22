import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

const Drop = (props) => {
  return <div className={classes.backdrop}/>;
};

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Drop/>,
    document.getElementById("backdrop-root")
  );
};

export default Backdrop;
