import express from 'express';
import productRoutes from './routes/product.routes';
import morgan from 'morgan';

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use('/api', productRoutes);

// Middelwares
app.use(morgan('dev'));
app.use(express.json());

export default app;