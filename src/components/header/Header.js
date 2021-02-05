import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import classes from './Header.module.css';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <div className={classes.Header}>
            <h1> {title} </h1>
            <Button
            color={showAdd ? 'red':'green'}
            text={showAdd ? 'Close':'Add'}
            onClick={onAdd}
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