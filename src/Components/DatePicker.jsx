import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  var dateobj =  
  new Date(Date.now()); 
  var B = dateobj.toISOString(); 


  return (
      <TextField
        id="datetime-local"
        label={props.label}
        type="datetime-local"
        defaultValue={B}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}
