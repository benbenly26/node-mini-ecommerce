const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDataBase = require('./config/connectDataBase')
const path = require('path')

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })

connectDataBase();

const products = require('./routes/product')
const orders = require('./routes/order')

app.use(express.json())
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

app.listen(process.env.PORT, () => {
    console.log(`Server listening ${process.env.PORT} is going in ${process.env.NODE_ENV_NAME}`)
})