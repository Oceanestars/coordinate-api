import express from 'express';
import routes from './src/routes/coordinatesRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
routes(app)
const PORT = 1234;
// Will print at localhost:{Port}
app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)
// Will print in terminal
app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))

// Database Setup

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/coordinates', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});