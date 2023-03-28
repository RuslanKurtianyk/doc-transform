import express from 'express';
const cors = require('cors');
// Routes
import { index } from './routes/index';

// Create Express server
export const app = express();

// Express configuration
app.set('port', process.env.PORT || 8081);

app.use(cors());

app.use('', index);
