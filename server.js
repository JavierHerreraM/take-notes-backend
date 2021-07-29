const dotenv =  require('dotenv');
const express = require('express');

dotenv.config({ path: './config/.env'});

const app = express();

// * Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// * Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`App open in port: ${PORT}`) );