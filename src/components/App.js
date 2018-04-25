import React, {Component} from "react";
import "./App.css";

import Header from "./Header/Header";
import Converter from "./Converter/Converter";

class App extends Component {
    render() {
        return (
            <div>
                <Header appName={"YNAP Converter"} />
                <Converter />
            </div>
        );
    }
}

export default App;
