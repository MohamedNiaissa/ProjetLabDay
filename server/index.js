import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./routes/api.js";

const PORT = 5000;
const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/department', api);
  
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
})