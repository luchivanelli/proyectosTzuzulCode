const express = require("express")
const database = require("../libs/database")

const router = express.Router()


router.get("/users",function(req,res){
    database.connection.query("SELECT * FROM users",function(error,result,fields){
        if(error!=null){

            return res.json({
                message:error.sqlMessage
            })
        }
        
        return res.json(result)
    })
    
})
   
router.get("/login",function(req,res){
    return res.json({
        ruta:"login"
    })
})
router.get("/registro",function(req,res){
    return res.json({
        ruta:"registro"
    })
})


module.exports = router // Exportando