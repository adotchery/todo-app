import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import { useLocation } from 'react-router-dom';

import './Header.css';

const Header = ({ title, onAdd, showAdd }) => {
    const Location = useLocation()
    return (
        <div className='Header'>
            <h1> {title} </h1>
            {Location.pathname==='/' && (<Button
            color={showAdd ? 'red':'green'}
            text={showAdd ? 'Close':'Add'}
            onClick={onAdd}
            />)}
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