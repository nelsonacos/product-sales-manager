import express from 'express';
const app = express();

import morgan from 'morgan';
import productRoutes from './routes/product.routes';

// Settings
app.set('port', process.env.PORT || 8000);

// Middelwares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Crons
import { dailyProductUpdate } from './crons/product.crons'
app.use(dailyProductUpdate);

export default app;