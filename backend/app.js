import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

config = {SERVER: process.env.SERVER || 'http://localhost', PORT: process.env.PORT || 3000};
const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${config.SERVER}:${PORT}`);
});