import express from 'express';
import config from './config.js';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.port, config.host,() => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
