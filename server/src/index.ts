import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import Routers from "./routers";
dotenv.config();

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // register express routes from defined application routes
    Routers(app);
    // setup express app here
    // ...

    // start express server

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log("Connect to db successfully!!! PORT:" + port);
    });
  })
  .catch((error) => console.log("Connect to db fail!!!", error));
