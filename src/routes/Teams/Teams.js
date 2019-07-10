import React from 'react';
import css from './Teams.module.css';

class Teams extends React.Component{

    render(){
        const { id } = this.props.match.params;
        return(
            <div className={css.page}>
                Teams {id}.
            </div>
        )
    }
}

export default Teams
