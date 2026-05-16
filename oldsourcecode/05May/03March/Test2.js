const express = require('express')
const app = express()
const port = 5000

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('API up and running!')
  console.log(`Example app listening on port ${port}`)
})