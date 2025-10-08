require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 1234;
const weatherRoute = require('./router/weatherRoutes')
const cors = require ('cors');
app.use(cors())
app.use(express.json())

app.use('/api/v1', weatherRoute)

app.get('/', (req, res) => {
    res.send(`Welcome to the Weather-API!!!`)
})

app.listen(PORT, ()=> {
    console.log(`Server is running on the PORT: ${PORT}`);
})