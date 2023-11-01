import {AppDataSource} from "./data-source";
import express from "express";

const app = express();

const startup = async () => {
  await AppDataSource.initialize()
}

void (async function () {
  await startup();
  app.listen(2022, '0.0.0.0', async () => {
    console.log("Init completed")
  });
})();
