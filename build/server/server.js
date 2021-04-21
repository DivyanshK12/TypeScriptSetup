"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//import * as _ from 'lodash';
var path = require("path");
var questions = [
    {
        "title": "How to login ?",
        "content": "How do I log in ?",
        "answerCount": 2
    },
    {
        "title": "How to logout ?",
        "content": "How do I log out ?",
        "answerCount": 1
    },
    {
        "title": "How to register ?",
        "content": "How do I sign up ?",
        "answerCount": 4
    }
];
var port = process.env.PORT || 1337;
var app = express();
app.listen(port);
app.use(express.static("public"));
console.log("Listening on port number : " + port + " ...");
app.get('/questions', function (_req, res) {
    debugger;
    res.json(questions);
});
app.get('/main.js', function (_req, res) {
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
app.get('/new', function (req, res) {
    var question = req.query;
    questions.push(question);
    res.json({
        questions: questions,
        "status": "OK"
    });
});
//# sourceMappingURL=server.js.map