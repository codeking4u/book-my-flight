require('dotenv').config()

const express = require('express');
const flightRouter = require('./routes/flights')

const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server started'))

app.use(express.json());
app.use('/v1/flights', flightRouter)

app.get('/', (req, res) => {
    res.send('Hello World')
})
