'use strict';

const { PORT, URL } = require('./settings');
const mongoose = require('mongoose');

async function start(app) {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => {
      console.log(`Server started has ${PORT} port...`);
    });

  } catch (e) {
    console.log(e);
  }
}

module.exports = start;
