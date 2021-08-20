import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: "112px",
    paddingTop: "72px",
  },

  inner_container: {
    margin: "0 auto",
    padding: "20px 0",
    width: "980px",
    position: "relative",
    display: "flex",
    [theme.breakpoints.down("1075")]: {
      height: "496px",
      margin: "0 40px",
      width: "auto",
    },
  },

  logo_outer: {
    boxSizing: "border-box",
    marginRight: "0",
    paddingRight: "32px",
    width: "580px",
    [theme.breakpoints.down("1075")]: {
      width: "400px",
    },
    [theme.breakpoints.down("900")]: {
      margin: "0 auto",
      padding: "0",
    },
  },

  logo_inner: {
    padding: "112px 0 16px",
    [theme.breakpoints.down("900")]: {
      padding: "0 0 20px 0",
    },
  },

  image: {
    height: "106px",
    margin: "-28px",
  },

  heading: {
    fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
    fontSize: "28px",
    fontWeight: "normal",
    lineHeight: "32px",
    width: "500px",
    [theme.breakpoints.down("1075")]: {
      fontSize: "24px",
      lineHeight: "28px",
      width: "auto",
    },
  },

  font: {
    verticalAlign: "inherit",
  },

  root: {
    height: '456px',
    width: '396px'
  },

  input_container: {
    display: "inline-block",
    fontSize: "17px",
    margin: "auto",
    padding: "6px 0",
    width: "364px",
  },

  email: {
    background: '#FFFFFF',
    border: '1px solid #dddfe2',
    color: '#1d2129',
    fontSize: '17px',
    height: '22px',
    lineHeight: '16px', 
    padding: '14px 16px',
    verticalAlign: 'middle',
    width:'330px',
    borderRadius: '6px'
  },

  button: {
    color: "white",
    background: "rgba(24,119,242,100)",
    "&:hover": {
      background: "#186af2",
    },
  },

  break: {
    alignItems: "center",
    borderBottom: "1px solid #dadde1",
    display: "flex",
    margin: "20px 16px",
    textAlign: "center",
  },

  signup: {
    paddingTop: "6px",
  },

  sign_button: {
    color: "white",
    background: "#42b72a",
    border: "none",
    borderRadius: "6px",
    fontSize: "17px",
    lineHeight: "48px",
    padding: "0 16px",
    "&:hover": {
      background: "#42b72a",
    },
  },
}));
