import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button 
        className={classes.btn}
        onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

Button.defaultProps = {
    text: 'Todo List',
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button