import ReactDOM from "react-dom";

import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";

import { Button, Card } from "@material-ui/core";
import { useStyles } from "./SignupStyles";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontWeight: "700",
      fontFamily: "Helvetica",
      fontSize: "18px",
    },
  },
  palette: {
    primary: {
      main: "#00a400",
      dark: "#689f38",
    },
  },
});

const Sign = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <div className={classes.inner_container}>
        <img
          className={classes.image}
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/Q0G2UVjVQ4_.png"
          onClick={props.onClick}
        />
        <div className={classes.title}>
          <div className={classes.title_head}>
            <font>
              <font>Sign up</font>
            </font>
          </div>
          <div className={classes.title_sub}>
            <font>
              <font>Quick and easy.</font>
            </font>
          </div>
        </div>
        <div className={classes.form}>
          <form>
            <div className={classes.name}>
              <input type="text" className={classes.first} placeholder="Name" />
              <input
                type="text"
                className={classes.last}
                placeholder="surname"
              />
            </div>
            <div className={classes.email_container}>
              <input
                type="email"
                className={classes.email}
                placeholder="email"
              />
            </div>
            <div className={classes.password_container}>
              <input
                type="password"
                className={classes.password}
                placeholder="New Password"
              />
            </div>
            <div className={classes.button_container}>
              <ThemeProvider theme={theme}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </Button>
              </ThemeProvider>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

const Signup = (props) => {
  return ReactDOM.createPortal(
    <Sign onClick={props.onClick} />,
    document.getElementById("overlay-root")
  );
};

export default Signup;
