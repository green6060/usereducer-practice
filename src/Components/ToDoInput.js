import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& label.MuiFormLabel-root': {
        color: 'grey',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'yellow',
        },
      },
    },
  })(TextField);

export default function ToDoInput() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <CssTextField 
                id="outlined-basic" 
                inputProps={{ style: { fontFamily: 'nunito', color: 'white'}}}
                label="Enter your To-Do Item Here" 
                variant="outlined" 
            />
        </form>
    )
}
