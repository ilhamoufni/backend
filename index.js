require("dotenv").config();

const express = require("express");

const path = require("path");
const fs = require("fs");

var cors = require("cors");
const cookieParser = require("cookie-parser");

// const mysql = require("mysql");
const authRouter = require("./routes/AuthRouter");
const documentsRouter = require("./routes/documentsRouter");
const userRouter = require("./routes/userRouter");
// const sequelize = require("./Config/Dbconfig");
const db = require("./models/index");
const corsOptions = require("./middlewares/cors");

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Urbaintrack." });
});

app.use("/api", authRouter);
app.use("/api", documentsRouter);
app.use("/api", userRouter);

const pdfDirectory = path.join(__dirname, "pdfs");

app.get("/pdfs/:folder/:filename", (req, res) => {
  const folder = req.params.folder;
  const filename = req.params.filename;
  const filePath = path.join(pdfDirectory, folder, filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send("PDF not found");
    } else {
      res.sendFile(filePath);
    }
  });
});

app.all("*", (req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.send("module not found");
  } else if (req.accepts("json")) {
    res.json({
      message: "Not Found",
    });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

const PORT = process.env.PORT || 3001;

db.sequelize
  .sync()
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(() => {
    console.log("Unable to connect db");
  });
