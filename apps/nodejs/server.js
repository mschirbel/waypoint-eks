const app = require('./src/app');
const db = require('./src/config/db');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App listening on port: ', port);
});