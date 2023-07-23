import express from "express";
import ViteExpress from "vite-express";
import { engine } from "express-handlebars";
import { resolve } from "path";

const app = express();

console.log("__dirname", __dirname);

app.set("view engine", ".html");
app.engine(
  ".html",
  engine({
    extname: ".html",
    layoutsDir: resolve(__dirname, "views/layouts"),
    partialsDir: resolve(__dirname, "views/partials"),
    defaultLayout: "main-layout",
  })
);

if (process.env.NODE_ENV === "production") {
  app.set("views", `./build/src/server/views`);

  app.use(express.static("build/assets"));
} else {
  app.set("views", `${__dirname}/views`);
}

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    res.locals.isProduction = true;
    console.log("yep! running as prod");
  } else {
    res.locals.isDevelopment = true;
    console.log("yep! running as dev");
  }

  next();
});

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
