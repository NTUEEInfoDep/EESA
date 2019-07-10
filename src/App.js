import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import css from './App.module.css';

import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import Contact from './routes/Contact';
import Dept from './routes/Dept';
import Teams from './routes/Teams';
import Staff from './routes/Staff';


class App extends React.Component {
    render(){
        return(
            <div className={css.app}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/staff/:id" component={Staff} />
                    <Route exact path="/teams/:id" component={Teams} />
                    <Route exact path="/dept/:id" component={Dept} />
                </Switch>
            </div>
        )
    }
}

export default App;