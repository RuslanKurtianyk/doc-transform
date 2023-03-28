import express from 'express';
import * as path from 'path';

// Routes
import { index } from './routes/index';

// Create Express server
export const app = express();

// Express configuration
app.set('port', process.env.PORT || 8081);

app.use('', index);
