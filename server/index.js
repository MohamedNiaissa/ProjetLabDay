import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./routes/api.js";

const PORT = 5001;
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.get('/favicon.ico', (req, res) => res.status(404));
app.use('/api', api);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
       next();
 });
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
})