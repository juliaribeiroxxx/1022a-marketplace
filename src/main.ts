console.log("amo DEUS..")
import express from "express"
const app= express()
app.listen(8000,()=>{
    console.log("eu amo minha mãe")
})

app.get("/", (req.res)=>{
    res.send("tudo em paz")
})