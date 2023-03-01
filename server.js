const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// We want the force as false unless we make any major changes to the models. true recreates the tables everytime and seed fills the tables.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`));
});



