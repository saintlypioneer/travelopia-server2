require('dotenv').config();

const express = require('express');
const app = express();
const connectDb = require('./config/db');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/trips', require('./controller/trips'));
app.get('/', (req, res)=>{
    res.send('Hello World');
});


connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
}
).catch((err)=>{
    console.log(err);
})