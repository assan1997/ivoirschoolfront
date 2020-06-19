import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    height: '50px',
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
});

function SignUp() {
  const classes = useStyles();
  return <div className={classes.root}>hy</div>;
}
export default SignUp;
