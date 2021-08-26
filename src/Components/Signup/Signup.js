import ReactDOM from "react-dom";

import { useState, useContext, Fragment } from "react";
import AuthContext from "../../store/auth-context";

import { Button, Card } from "@material-ui/core";
import { useStyles } from "./SignupStyles";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { database, storage } from "../../firebase/firebase";

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

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const { signup } = useContext(AuthContext);

  const formSubmitHandler = async () => {
    try {
      setIsLoading(true);
      let res = await signup(email, password);
      let id = res.user.uid;
      let name = first + " " + last;

      const uploadTaskListener = storage
        .ref(`/users/${id}/profileImage`)
        .put(file);

      uploadTaskListener.on("state_changed", upload, uerror, success);
      function upload(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      }
      function uerror(error) {
        setError(error);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
      async function success() {
        let downloadUrl =
          await uploadTaskListener.snapshot.ref.getDownloadURL();
        console.log(downloadUrl);
        await database.users.doc(id).set({
          email: email,
          userId: id,
          username: name,
          createdAt: database.getCurrentTimeStamp(),
          profileUrl: downloadUrl,
          postIds: [],
        });
      }
      console.log("User has Signed up");
    } catch (err) {
      setError("Enter valid data");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setIsLoading(false);
  };

  const handleFileSubmit = (e) => {
    let file = e.target.files[0];
    console.log(file);
    if (file != null) {
      setFile(file);
    }
  };

  return (
    <Fragment>
      {!isLoading ? (
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
                  <input
                    type="text"
                    className={classes.first}
                    placeholder="Name"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                  />
                  <input
                    type="text"
                    className={classes.last}
                    placeholder="surname"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                  />
                </div>
                <div className={classes.email_container}>
                  <input
                    type="email"
                    className={classes.email}
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={classes.password_container}>
                  <input
                    type="password"
                    className={classes.password}
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={classes.pic}>
                  <label htmlFor="pic" className={classes.input_label}>
                    Profile Image:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSubmit}
                    id="pic"
                    className={classes.pass_input}
                  ></input>
                </div>
                <div className={classes.button_container}>
                  <ThemeProvider theme={theme}>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      onClick={formSubmitHandler}
                    >
                      Sign up
                    </Button>
                  </ThemeProvider>
                </div>
              </form>
            </div>
          </div>
        </Card>
      ) : (
        <CircularProgress className={classes.progress} />
      )}
    </Fragment>
  );
};

const Signup = (props) => {
  return ReactDOM.createPortal(
    <Sign onClick={props.onClick} />,
    document.getElementById("overlay-root")
  );
};

export default Signup;
