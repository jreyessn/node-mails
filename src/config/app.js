import express from 'express';
import morgan from 'morgan';
import pkg from '../../package.json';
import routes from '../routes/api.routes';

const app = express();
const cors = require('cors');

// global variables
app.set('pkg', pkg);
app.set('port', 3221)

app.use(morgan('dev'));
app.use(express.json())
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}))

app.get('/', (req, res) => {
	res.json({
		name: app.get('pkg').name,
		author: app.get('pkg').author,
		description: app.get('pkg').description,
		version: app.get('pkg').version,
	})
})

app.use('/api', routes);


export default app;
