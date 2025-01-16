const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')
config()

const bookRoutes = require('./routes/book.routes')

// Usamos express para los middlewares

const app = express();
app.use(bodyParser.json()) // Parseador de Bodies

// Acá conectaremos la base de datos:
// mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
// const db = mongoose.connection;



// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.MONGO_DB_NAME
})
.then(() => console.log("🔥 Conectado a MongoDB Atlas"))
.catch(err => console.error("❌ Error al conectar a MongoDB:", err));






app.use('/books', bookRoutes)

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Servidor iniciado en el puerto ${port}`)
})


