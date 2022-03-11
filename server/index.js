import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./routes/api.js";
import cookieParser from "cookie-parser";
import sessions from "express-session";
import { sessionConfig } from "./config/config.js";

const PORT = 5001;
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
app.use(sessions(sessionConfig(sessions)));

app.use('/api', api);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', yourExactHostname);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});