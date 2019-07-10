import React from 'react';
import css from './Staff.module.css';

class Staff extends React.Component{

    render(){
        const { id } = this.props.match.params;
        return(
            <div className={css.page}>
                Staffs {id}.
            </div>
        )
    }
}

export default Staff
