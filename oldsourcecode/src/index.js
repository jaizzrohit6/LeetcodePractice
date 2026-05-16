const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  console.log(res)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('API up and running!')
  console.log(`Example app listening on port ${port}`)
})