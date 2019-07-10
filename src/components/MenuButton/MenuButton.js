import React from 'react';

import css from './MenuButton.module.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        height: "100%",
        width: "100%",
    },
    menu: {
        minWidth: "11.2vw",
    }
})

class MenuButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            anchorEl: null
        }
    }
    
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    render(){
        const { classes, label, tags } = this.props;
        const { anchorEl } = this.state;
        return(
            <div className={css.container}>
                <Button 
                    className={classes.button}
                    aria-controls="menu" 
                    aria-haspopup="true" 
                    onClick={this.handleClick}
                >  
                    {label}
                </Button>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {
                        tags.map((item, idx) => (
                            <MenuItem 
                                key={idx} 
                                onClick={this.handleClose}
                                className={classes.menu}
                            >
                                {item}
                            </MenuItem>
                        ))
                    }
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(MenuButton);
