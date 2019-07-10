import React from 'react';
import css from './InputField.module.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = themes => ({
    inputField: {
        width: "100%",
        height: "100%",
    },
})

class InputField extends React.Component{

    render(){
        const { classes } = this.props;
        return(
            <div className={css.inputContainer}>
                <TextField 
                    className={classes.inputField}
                    variant="outlined"
                />
            </div>
        )
    }
};

export default withStyles(styles)(InputField);
