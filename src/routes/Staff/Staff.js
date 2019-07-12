import React from 'react';
import css from './Staff.module.css';
import FaceIcon from '@material-ui/icons/FaceOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    icon: {
        fontSize: "5vh",
        marginRight: "2%",
    },
})

class Staff extends React.Component{

    render(){
        const { id } = this.props.match.params;
        const { classes } = this.props;

        return(

            <div className={css.page}>
                <div className={css.title}><FaceIcon className={classes.icon}/>{id}</div>
                <div className={css.lowerPage}></div>
            </div>
        )
    }
}

export default withStyles(styles)(Staff);
