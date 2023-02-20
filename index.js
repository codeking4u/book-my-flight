import dotenv from "dotenv";
import express from "express";
import route from './routes/flights.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server started'))

app.use(express.json());
app.use('/v1/flights', route)


