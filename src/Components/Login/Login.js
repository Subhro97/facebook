import { useState, useContext, Fragment } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useStyles } from "./LoginStyles";
import {
  createTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import Backdrop from "../UI/Backdrop";
import Signup from "../Signup/Signup";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
      fontWeight: "700",
      fontFamily: "Helvetica",
    },
  },
});

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [toSign, setToSign] = useState(false);
  const { login } = useContext(AuthContext);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('hi')
    try {
      setIsLoading(true);
      await login(email, password);
      console.log('Logged in');
    } catch (err) {
      setError("Invalid credentials");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
    setIsLoading(false);
  };

  const signupHandler = () => {
    setToSign((sign) => !sign);
  }

  return (
    <Fragment>
      {toSign && <Backdrop/>}
      {toSign && <Signup onClick={signupHandler}/>}
      {!isLoading ? (
        <div className={classes.container}>
          <div className={classes.inner_container}>
            <div className={classes.logo_outer}>
              <div className={classes.logo_inner}>
                <img
                  className={classes.image}
                  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  alt="Facebook"
                />
              </div>
              <h2 className={classes.heading}>
                <font className={classes.font}>
                  <font className={classes.font}>
                    Facebook helps you connect and share with people.
                  </font>
                </font>
              </h2>
            </div>

            <Card className={classes.root}>
              <div className={classes.form}>
                <form>
                  <div>
                    <div className={classes.input_container}>
                      <input
                        type="email"
                        className={classes.email}
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                    <div className={classes.input_container}>
                      <input
                        type="password"
                        className={classes.email}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></input>
                    </div>
                  </div>

                  <div className={classes.log}>
                    <MuiThemeProvider theme={theme}>
                      <Button variant="text" className={classes.button} onClick={formSubmitHandler}>
                        log in
                      </Button>
                    </MuiThemeProvider>
                  </div>
                  <div className={classes.forgot}>
                    <Link className={classes.nav} to="/">
                      <font className={classes.font}>
                        <font className={classes.font}>forgot password?</font>
                      </font>
                    </Link>
                  </div>
                  <div className={classes.break}></div>
                  <div className={classes.signup} onClick={signupHandler}>
                    <div className={classes.sign_button}>
                      create new account
                    </div>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <CircularProgress className={classes.progress} />
      )}
    </Fragment>
  );
};

export default Login;
