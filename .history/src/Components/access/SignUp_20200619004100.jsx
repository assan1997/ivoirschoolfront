import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: 'red',
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
  },
});

function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.width}></div>
    </div>
  );
}
export default SignUp;
