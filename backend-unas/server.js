import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { PORT, MONGO_URL } from './config.js' 


const app = express()

app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error conectando a MongoDB:', err));
  
  // Esquemas
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
  });
  
  const citaSchema = new mongoose.Schema({
    nombre: String,
    telefono: String,
    servicio: String,
    fecha: String,
    hora: String,
    notas: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Modelos
  const Product = mongoose.model('Product', productSchema);
  const Cita = mongoose.model('Cita', citaSchema, 'citas'); // 👈 fuerza el nombre de la colección

  
  // Rutas
  
  // Ruta raíz
  app.get('/', (req, res) => {
    res.send('✨ API de uñas activa');
  });
  
  // Productos
  app.get('/products', async (req, res) => {
    const productos = await Product.find();
    res.json(productos);
  });
  
  
  // Citas
  
  app.post('/citas', async (req, res) => {
    const { nombre, telefono, servicio, fecha, hora, notas } = req.body;
    if (!nombre || !telefono || !servicio || !fecha || !hora) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }
  
    const nuevaCita = new Cita({
      nombre,
      telefono,
      servicio,
      fecha,
      hora,
      notas,
    });
  
    await nuevaCita.save();
    res.status(201).json({ message: 'Cita registrada exitosamente', cita: nuevaCita });
  });



app.listen(3000, () => {
    console.log(`Server on port ${PORT}`)
})