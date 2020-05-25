import * as http from 'http';
import * as express from 'express';

const app = express();

app.post('/', (req, res, next) => {
  res.send('pong!');
});

http.createServer(app).listen(8080, () => {
  console.log('server listening on port 8080');
});
