import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./App.css";

const mapStateToProps = state => ({
    appName: state.common.appName,
});

class App extends Component {
    render() {
        return <div className="App">{this.props.appName}</div>;
    }
}

App.propTypes = {
    appName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, () => ({}))(App);
