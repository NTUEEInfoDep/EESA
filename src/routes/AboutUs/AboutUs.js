import React from 'react';
import css from './AboutUs.module.css';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import Typrography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        width: "20%",
        margin: "0 auto"
    },
    title: {
        fontSize: 30,
        textAlign: "center"
    },
    "@global": {
        html: {
          [theme.breakpoints.up("sm")]: {
            fontSize: 18
          }
        }
      }
})

class AboutUs extends React.Component{

    render(){
        const { classes } = this.props;
        return(
            <div className={css.page}>
                
            </div>
        )
    }
}

export default (withStyles)(styles)(AboutUs);
