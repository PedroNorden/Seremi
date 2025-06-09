const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); 
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/usuarios', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
