//Modulos nativos:
const path = require("path")  //permite administrar rutas
//Modulos externos (instalados)
const express = require("express")
const port = 4000

const app = express()


//req= peticion , res= respuesta
app.get("/",function(req,res) {
    console.log(__dirname) //Ruta de nuestro proyecto (raiz)
    return res.sendFile(path.join(__dirname,"static","index.html"))
})

app.listen(port,()=>{
    console.log("Escuchando en: http://localhost:"+port)
})