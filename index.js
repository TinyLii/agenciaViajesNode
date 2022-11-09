
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//Conectar a la db
db.authenticate()
    .then( ()=> console.log("Base de datos conectada"))
    .catch( error => console.log(error))


//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set("view engine","pug")

//Obtener el año actual
app.use((req,res,next)=>{
    const year = new Date()

    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = "Agencia de viajes"
    next()
})

//Agregar body parser para leer formulario
app.use(express.urlencoded({extended: true}))

//Definir carpeta publica
app.use(express.static("public"))

app.use("/", router);

app.listen(port, ()=>{
    console.log(`El sv está funcionando en el puerto ${port}`)
})