import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "inline-block",
    margin: "20px",
    position: "relative",
    textAlign: "left",
  },

  inner_container: {
    overflow: "visible",
    padding: "0px",
    width: "440px",
  },

  image: {
    position: "absolute",
    right: "10px",
    top: "12px",
    zIndex: "2",
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },

  title: {
    paddingTop: "10px",
    boxsizing: "border-box",
    padding: "10px 16px",
    position: "relative",
    width: "400px",
    zIndex: "1",
    marginTop: "0",
    paddingTop: "10px",
  },

  title_head: {
    fontWeight: "600",
    fontSize: "32px",
    lineheight: "38px",
    marginBottom: "0",
    fontFamily: "SFProDisplay-Bold, Helvetica, Arial, sans-serif",
  },

  title_sub: {
    marginBottom: "0",
    fontSize: "15px",
    lineHeight: "24px",
    fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
  },

  form: {
    borderTop: "1px solid #dadde1",
    boxSizing: "border-box",
    padding: "16px",
    position: "relative",
    width: "440px",
  },

  name: {
    width: "410px",
    height: "50px",
  },

  first: {
    height: "40px",
    width: "200px",
    borderRadius: "5px",
    background: "#f5f6f7",
    marginRight: "10px",
    outline: "none",
    border: "0.5px solid grey",
    boxSizing: "border-box",
    padding: "10px 15px",
    fontSize: "15px",
  },

  last: {
    height: "40px",
    width: "200px",
    borderRadius: "5px",
    background: "#f5f6f7",
    outline: "none",
    boxSizing: "border-box",
    padding: "10px 15px",
    border: "0.5px solid grey",
    fontSize: "15px",
  },

  email_container: {
    width: "410px",
    height: "50px",
  },

  email: {
    height: "40px",
    width: "410px",
    borderRadius: "5px",
    background: "#f5f6f7",
    outline: "none",
    boxSizing: "border-box",
    padding: "10px 15px",
    border: "0.5px solid grey",
    fontSize: "15px",
  },

  password_container: {
    width: "410px",
    height: "40px",
  },

  password: {
    height: "40px",
    width: "410px",
    borderRadius: "5px",
    background: "#f5f6f7",
    outline: "none",
    boxSizing: "border-box",
    padding: "10px 15px",
    border: "0.5px solid grey",
    fontSize: "15px",
  },

  button_container: {
    textAlign: "center",
    marginTop: "15px",
  },

  button: {
    height: "36px",
    width: "194px",
    borderRadius: "6px",
    padding: "0 32px",
    marginTop: "10px",
    marginBottom: "10px",
  },

  progress: {
    marginTop: "12rem",
  },

  pic: {
    boxSizing: "border-box",
    width: "410px",
    height: "50px",
  },

  pass_input: {
    boxSizing: "border-box",
    height: "40px",
    width: "410px",
    borderRadius: "5px",
    background: "#f5f6f7",
    outline: "none",
    padding: "10px 15px",
    border: "0.5px solid grey",
    fontSize: "15px",
  },

  input_label: {
    boxSizing: "border-box",
    fontSize: "12px",
    padding: "0px 0px 10px",
  },
});
