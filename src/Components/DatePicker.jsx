import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import militaryToStandard from './Helper'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers(props) {
  
  const classes = useStyles();
  const bind = props.bind
  
  return (
      <TextField
        id="datetime-local"
        {...bind}
        label={props.label}
        type="datetime-local"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}
