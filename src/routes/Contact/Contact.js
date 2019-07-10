import React from 'react';
import css from './Contact.module.css';
import InputField from '../../components/InputField';

class Contact extends React.Component{

    render(){
        return(
            <div className={css.page}>
                <div className={css.leftContainer}>
                </div>
                <div className={css.rightContainer}>
                    <div className={css.formContainer}>
                        <div className={css.inputContainer}><InputField/></div>
                        <div className={css.inputContainer}><InputField/></div>
                        <div className={css.inputContainer}><InputField/></div>
                        <div className={css.inputContainer}><InputField/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
