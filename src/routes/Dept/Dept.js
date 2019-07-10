import React from 'react';
import css from './Dept.module.css';

class Dept extends React.Component{

    render(){
        const { id } = this.props.match.params;
        return(
            <div className={css.page}>
                Depts {id}
            </div>
        )
    }
}

export default Dept
