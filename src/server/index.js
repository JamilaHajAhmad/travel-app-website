// Important initializations for the server ans APIs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// Middleware Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('src/client'));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'src/client/views' });
});


// Server Configuration
const server = app.listen(5000,() => {
    console.log(`Server is running on port 5000`);
});



