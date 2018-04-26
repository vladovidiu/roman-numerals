import React from "react";
import axios from "axios";

import "./Converter.css";
const romanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
const API_ROOT = "http://localhost:3001/api";

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            result: "",
            error: "",
        };

        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    isInputNumber(val) {
        return Number.isInteger(Number(val)) && Number(val) < 4000;
    }

    isInputRoman(val) {
        return val && romanRegex.test(val.toUpperCase());
    }

    checkInputsValidity(val) {
        return this.isInputRoman(val) || this.isInputNumber(val);
    }

    onChange(ev) {
        const {value} = ev.target;

        const isValid = this.checkInputsValidity(value);
        if (!isValid && value) {
            this.setState({error: "Check input's validity."});
        } else {
            this.setState({error: ""});
        }
        this.setState({value: value.toUpperCase()});
    }

    makeApiCall(mode, value) {
        let endpoint;
        let requestValue = value;
        if (mode === "number") {
            endpoint = "/get-roman";
            requestValue = Number(value);
        } else {
            endpoint = "/get-numeric";
        }

        axios.post(`${API_ROOT}${endpoint}`, {value: requestValue}).then(res => {
            const {returnValue} = res.data;
            this.setState({result: returnValue});
        });
    }

    handleClick() {
        const {value} = this.state;
        if (this.isInputNumber(value)) {
            this.makeApiCall("number", value);
        }
        if (this.isInputRoman(value)) {
            this.makeApiCall("roman", value);
        }
    }

    render() {
        const {result, error, value} = this.state;
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Roman-Arabic Converter</h1>
                    <p>Type in either a roman literal or an arabic number to convert.</p>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control error"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Type in either Arabic or Roman"
                            onChange={this.onChange}
                            value={this.state.value}
                        />
                    </div>
                    <p>
                        <button
                            type="button"
                            className={"btn btn-primary" + (error || !value ? "disabled" : "")}
                            onClick={this.handleClick}
                        >
                            Convert
                        </button>
                    </p>
                    {result ? (
                        <div className="alert alert-light" role="alert">
                            Converted value: {result}
                        </div>
                    ) : null}
                    {error ? (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Converter;
