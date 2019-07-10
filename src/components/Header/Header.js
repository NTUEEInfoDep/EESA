import React from 'react';

import css from './Header.module.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import MenuButton from '../MenuButton';

const styles = theme => ({
    buttonDiv: {
        height: "60%",
        width: "16%",
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "2vh"
    },
    link: {
        textDecoration: "none",
        color: "black",
    },
    button: {
        width: "100%",
        height: "100%",
    }
})

class Header extends React.Component{
    render(){
        const { classes } = this.props;
        const LinkRef = React.forwardRef((props, ref) => <div className={classes.buttonDiv} ref={ref}><NavLink {...props} /></div>);

        return(
            <div className={css.header}>
                <div className={css.iconContainer}></div>
                <div className={css.buttonsContainer}>
                    <Button 
                        className={classes.button}
                        component={LinkRef}
                        to="/"
                    >
                        首頁
                    </Button>
                    <MenuButton 
                        label="aboutus"
                        title="關於系學會" 
                        tags={[
                            '關於我們', 
                            '幹部一覽 B05', 
                            '幹部一覽 B06'
                        ]}
                    />
                    <MenuButton 
                        label="dept"
                        title="系學會部門"
                        tags={[
                            '學術部', 
                            '資訊部', 
                            '活動部',
                            '行銷部',
                            '公關部',
                            '體育部',
                            '衛生部',
                            '雜貨部',
                            'NTUEE+',
                        ]}
                    />
                    <MenuButton 
                        label="teams"
                        title="系隊介紹"
                        tags={[
                            '系男籃', 
                            '系女籃', 
                            '系羽',
                            '系桌',
                            '系足',
                            '系網',
                            '系男排',
                            '系女排'
                        ]}
                    />
                    <Button 
                        className={classes.button}
                        component={LinkRef}
                        to="/contact"
                    >
                        聯絡我們
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Header)
