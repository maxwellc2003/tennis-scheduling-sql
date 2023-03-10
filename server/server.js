const path = require("path");
const express = require("express");
const session = require("express-session");
const https = require("https");
const fs = require("fs");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8443;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const THIRTY_MIN = 1000 * 60 * 30;

const sess = {
  secret: "pass",
  cookie: { maxAge: THIRTY_MIN },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const corsOptions = {
  origin: "https://tennisscheduling.com", // http://localhost:3000  https://tennisscheduling.com
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

(async () => {
  await sequelize.sync();
  console.log("Synced!");
})();

// FOR DEVELOPMENT:
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// FOR DEPLOYMENT:
const privateKey = fs.readFileSync(
  "/home/web3605/ssl/keys/cb106_320e5_ac5a05edca714e826328d4f08e7ab642.key"
);
const certificate = fs.readFileSync(
  "/home/web3605/ssl/certs/_wildcard__tennisscheduling_com_cb106_320e5_1680397638_c945f5c015e55e90ec0aaf063aa967f5.crt"
);

const credentials = { key: privateKey, cert: certificate };

const server = https.createServer(credentials, app);
server.listen(PORT, () => {
  console.log(`Https app listening on port ${PORT}!`);
});
