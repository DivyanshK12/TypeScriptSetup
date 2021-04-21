import * as express from 'express';
//import * as _ from 'lodash';
import * as path from 'path';
import { Question } from '../@types/Question';

const questions : Question[] = [
    {
        "title":"How to login ?",
        "content" : "How do I log in ?",
        "answerCount" : 2
    },
    {
        "title":"How to logout ?",
        "content" : "How do I log out ?",
        "answerCount" : 1
    },
    {
        "title":"How to register ?",
        "content" : "How do I sign up ?",
        "answerCount" : 4
    }
];

const port : string | number = process.env.PORT || 1337;

const app  = express();
app.listen(port);
app.use(express.static("public"));

console.log(`Listening on port number : ${port} ...`);

app.get('/questions', (_req, res) => {
    debugger;
    res.json(questions);
});

app.get('/main.js', (_req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});

app.get('/new', (req, res) => {
    const question : Question = (req.query as unknown as Question);
    questions.push(question);

    res.json({
        questions,
        "status": "OK"
    });
})