import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import classes from './Header.module.css';

const Header = (props) => {
    const onClick = () => {
        console.log('[Header.js] clicked!');
    }
    
    return (
        <div className={classes.Header}>
            <h1> {props.title} </h1>
            <Button 
            text='ADD!'
            onClick={onClick}
            />
        </div>
    );
}


Header.defaultProps = {
    title: 'Todo List',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;