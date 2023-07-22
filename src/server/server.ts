import express from "express";
import ViteExpress from "vite-express";
import { engine } from "express-handlebars";

const app = express();

console.log(__dirname);

app.engine(".html", engine({ extname: ".html" }));
app.set("view engine", ".html");
app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/companies", (req, res) => {
  res.render("companies");
});

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
