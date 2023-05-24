import "@angular/compiler";
import express from "express";
import { ngExpressEngine } from "@nguniversal/express-engine";
import { AppServerModule } from "./app-server.module";

const app = express();

// Set the engine
app.engine(
  "html",
  ngExpressEngine({
    bootstrap: AppServerModule,
  })
);

app.set("view engine", "html");

app.get("/**/*", (req, res) => {
  res.render("../dist/index", {
    req,
    res,
  });
});

const port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});
