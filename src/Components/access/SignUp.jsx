import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";
const SignUp = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [showloader, setShowLoader] = useState(false);
  const [redirection, setRedirection] = useState(false);
  let name = " ";
  let password = " ";
  let confirmpassword = " ";
  let signUrl = "http://192.168.1.113:4000/api-ivoireschool/signup";
  let loginUrl = "http://192.168.1.113:4000/api-ivoireschool/schoolLogin";

  const _onCreateSchool = () => {
    console.log(name, confirmpassword);
    setShowLoader(true);
    axios.post(signUrl, { name, password }).then((response) => {
      setShowLoader(false);
      console.log(response);
    });
  };
  const _onLoginSchool = () => {
    console.log(name, confirmpassword);
    setShowLoader(true);
    axios.post(loginUrl, { name, password }).then((response) => {
      setShowLoader(false);
      if (response.data !== null) {
        sessionStorage.setItem("school", response.data.name);
        sessionStorage.setItem("schoolId", response.data._id);
        setRedirection(true);
      }
    });
  };
  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root: {
      height: "100vh",
      width: "100%",
      position: "relative",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    nav: {
      width: "100%",
      height: "5%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      color: "#FFF",
    },
    sub: {
      backgroundColor: "#e3f2fd",
      width: "100%",
      height: "10%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    create: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      padding: "10px",
    },
    main: {
      height: "85%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      width: "300px",
      height: "300px",
    },
  }));
  const classes = useStyles();

  if (redirection) {
    return <Redirect to="/schooldash" />;
  }
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div className={classes.navbrand}>Ivoire school</div>
      </div>
      <Container>
        <div className={classes.sub}>
          <Button
            onClick={() => {
              setDisplayLoginForm(true);
              setDisplayForm(false);
            }}
            className={classes.create}
            variant="contained"
            color="primary"
          >
            Administrer une école
          </Button>
          <Button
            onClick={() => {
              setDisplayForm(true);
              setDisplayLoginForm(false);
            }}
            className={classes.create}
            variant="contained"
            color="primary"
          >
            <AddCircleIcon /> Créer une école
          </Button>
        </div>
        <div className={classes.main}>
          {/* SIGNIN */}
          {displayLoginForm && (
            <form
              className={classes.form}
              onSubmit={(e) => {
                alert("ggg");
                e.preventDefault();
                _onLoginSchool();
              }}
            >
              <TextField
                label="Nom de école"
                defaultValue={`${name}`}
                helperText="*"
                variant="outlined"
                onChange={(text) => {
                  name = text.currentTarget.value;
                }}
              />
              <TextField
                label="Saisissez le mot de passe de l'école"
                defaultValue={`${password}`}
                helperText="*"
                variant="outlined"
                onChange={(text) => {
                  password = text.currentTarget.value;
                }}
                type="password"
              />
              <Button variant="contained" color="default" type="submit">
                <span>Accéder à l'administration</span>
                {showloader && <CircularProgress color="primary" />}
              </Button>
            </form>
          )}

          {/* SIGNUP */}
          {displayForm && (
            <form
              className={classes.form}
              onSubmit={(e) => {
                e.preventDefault();
                _onCreateSchool();
              }}
            >
              <TextField
                label="Nom de école"
                defaultValue={`${name}`}
                helperText="*"
                variant="outlined"
                onChange={(text) => {
                  name = text.currentTarget.value;
                }}
              />
              <TextField
                label="Créer un mot de passe"
                defaultValue={`${password}`}
                helperText="*"
                variant="outlined"
                onChange={(text) => {
                  password = text.currentTarget.value;
                }}
                type="password"
              />
              <TextField
                label="Confirmer le mot de passe"
                defaultValue={`${confirmpassword}`}
                helperText="*"
                variant="outlined"
                onChange={(text) => {
                  confirmpassword = text.currentTarget.value;
                }}
                type="password"
              />
              <Button variant="contained" color="default" type="submit">
                <span>Créer une école</span>
                {showloader && <CircularProgress color="primary" />}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
};
export default SignUp;
