import express from "express"
import {PORT} from "./config.js"
const app = express();
// middleware

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });

