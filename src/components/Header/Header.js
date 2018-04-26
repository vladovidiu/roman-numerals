import React from "react";
import PropTypes from "prop-types";

const Header = ({appName}) => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            {appName}
        </a>
    </nav>
);

Header.propTypes = {
    appName: PropTypes.string.isRequired,
};

export default Header;
