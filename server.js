const path = require('path');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/connection');

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // expires after 1 days
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

app.use(session(sess));
app.use(cookieParser());

app.use((req, res, next) => {
  if (req.cookies.logged_in === "true") { 
      res.locals.logged_in = true;
  } else {
      res.locals.logged_in = false;
  }
  next();
});



const hbs = exphbs.create();


app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
  });