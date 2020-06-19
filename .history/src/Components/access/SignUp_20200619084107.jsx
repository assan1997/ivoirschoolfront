import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function SignUp() {
  const [displayForm, setDisplayForm] = useState(false);
  let name = '';
  let password = '';
  let cofirmpassword = '';
  const useStyles = makeStyles({
    root: {
      height: '100vh',
      width: '100%',
      position: 'relative',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    nav: {
      width: '100%',
      height: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e3f2fd',
    },
    sub: {
      backgroundColor: 'black',
      width: '100%',
      height: '10%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

    create: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: '10px',
    },
    main: {
      height: '85%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      width: '250px',
      height: '250px',
      visibility: `${displayForm ? 'visible' : 'hidden'}`,
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div className={classes.navbrand}>Ivoire school</div>
      </div>
      <div className={classes.sub}>
        <Button
          onClick={() => {
            setDisplayForm(true);
          }}
          className={classes.create}
          variant='contained'
          color='primary'
        >
          Créer une école{' '}
        </Button>
      </div>
      <div className={classes.main}>
        <form className={classes.form}>
          <TextField
            id='outlined-helperText'
            label='Nom de école'
            defaultValue=''
            helperText='*'
            variant='outlined'
            onChange={(text) => {
              name = text.currentTarget.value;
              console.log(name);
            }}
          />
          <TextField
            id='outlined-helperText'
            label='Créer un mot de passe'
            defaultValue=''
            helperText='*'
            variant='outlined'
            onChange={(text) => {
              password = text.currentTarget.value;
              console.log(password);
            }}
          />
          <TextField
            id='outlined-helperText'
            label='Saisissez à nouveau votre mo de passe'
            defaultValue=''
            helperText='*'
            variant='outlined'
            onChange={(text) => {
              name = text.currentTarget.value;
              console.log(name);
            }}
          />
          <Button variant='contained' color='primary'>
            Créer une école
          </Button>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
