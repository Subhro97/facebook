import { Fragment, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core";

import AppBars from "../UI/AppBars";
import Lside from "./Lside";
import Center from "./Center";
import Rside from "./Rside";

import { database, storage } from "../../firebase/firebase";

const useStyles = makeStyles({
  main: {
    display: "flex",
  },
});

const Feed = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [pic, setPic] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = database.users.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setName(doc.data().username.split(" ")[0]);
        setFullName(doc.data().username);
        setPic(doc.data().profileUrl)
      });

      setIsLoading(false);
    });
    return unsub;
  }, []);

  return (
    <Fragment>
      {!isLoading && (
        <>
          <header>
            <AppBars name={name} pic={pic}/>
          </header>
          <main className={classes.main}>
            <Lside name={fullName} pic={pic} />
            <Center name={name} full={fullName} pic={pic}/>
            <Rside />
          </main>
        </>
      )}
    </Fragment>
  );
};

export default Feed;
