const path = require('path');
const express = require('express');
const session = require('express-session');

const cors=require("cors");

const app = express();
const PORT = process.env.PORT || 8443

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'pass',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

(async () => {
  await sequelize.sync();
  console.log('Synced!');
})();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});