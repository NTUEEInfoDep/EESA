import React from 'react';

import css from './MenuButton.module.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

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
        const { classes, label, title, tags } = this.props;
        const { anchorEl } = this.state;
        const LinkRef = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>);
        
        return(
            <div className={css.container}>
                <Button 
                    className={classes.button}
                    aria-controls="menu" 
                    aria-haspopup="true" 
                    onClick={this.handleClick}
                >  
                    {title}
                </Button>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {
                        tags.map((item, idx) => {
                            let path;
                            if(label === 'aboutus'){
                                if(item === "關於我們")
                                    path = "/aboutus";
                                else{
                                    path = "/staff/" + item;
                                }
                            }
                            else{
                                path = "/" + label + "/" + item;
                            }
                            
                            return(
                                <MenuItem 
                                    key={idx} 
                                    onClick={this.handleClose}
                                    className={classes.menu}
                                    component={LinkRef}
                                    to={path}
                                >
                                    {item}
                                </MenuItem>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(MenuButton);
