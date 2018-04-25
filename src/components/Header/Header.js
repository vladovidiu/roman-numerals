import React from "react";
import PropTypes from "prop-types";

const Header = ({appName}) => (
    <nav className="navbar navbar-light bg-info">
        <span className="navbar-brand mb-0 h1">{appName}</span>
    </nav>
);

Header.propTypes = {
    appName: PropTypes.string.isRequired,
};

export default Header;
