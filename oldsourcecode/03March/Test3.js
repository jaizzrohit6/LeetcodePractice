const express = require("express")
const app = express()
const port = 5000

app.get('/mygetApi',(req,res)=>{
    res.send("Hellow World get")
})

app.listen(port,()=>{
    console.log('API up and running!')
    console.log(`Example app listening on port ${port}`)
})