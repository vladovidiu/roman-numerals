import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "http://localhost:3001/api";

const responseBody = res => res.body;

const requests = {
    get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
    post: (url, body) => superagent(`${API_ROOT}${url}`, body).then(responseBody),
};

const Converter = {
    toRoman: value => requests.post("/get-numeric", {value}),
    toRoman: value => requests.post("/get-roman", {value}),
};

export default {
    Converter,
};
