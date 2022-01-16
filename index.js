const express = require('express')
const router = require('./src/routes/index')
const app = express()
const port = 5000
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use('/api/v1/', router)

app.listen(port, () => console.log(`Listening on port ${port}!`))
