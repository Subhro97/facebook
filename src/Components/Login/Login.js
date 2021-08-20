import { NavLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useStyles } from "./LoginStyles";

const Login = () => {
  const classes = useStyles();
  return (
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
          <form>
            <div>
              <div className={classes.input_container}>
                <input type="email" className={classes.email}></input>
              </div>
              <div className={classes.input_container}>
                <input type="password" className={classes.email}></input>
              </div>
            </div>

            <div className={classes.log}>
              <Button variant="contained" className={classes.button}>
                log in
              </Button>
            </div>
            <div className={classes.forgot}>
              <NavLink to="/">
                <font className={classes.font}>
                  <font className={classes.font}>forgot password?</font>
                </font>
              </NavLink>
            </div>
            <div class={classes.break}></div>
            <div className={classes.signup}>
              <Button className={classes.sign_button}>
                create new account
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
