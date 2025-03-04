const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);

// Sincronizar base de datos y correr el servidor
db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
});
