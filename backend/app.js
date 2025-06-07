const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // sin .js si usas CommonJS
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
