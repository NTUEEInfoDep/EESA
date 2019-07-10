import React from 'react';
import classes from './Home.module.css';
import Header from '../../components/Header';

class Home extends React.Component{

    render(){
        return(
            <div className={classes.page}>
                <Header/>
            </div>
        )
    }
}

export default Home
