const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const user = require('./routes/user.routes');

app.use('/api/user', user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    chalk.white.bgGreen.bold(' PORT ') + chalk.white.bgBlue.bold(` ${PORT} `)
  );
});
