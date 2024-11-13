import dotnev from 'dotenv';
dotnev.config();

import express from 'express';



const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.static('../client/dist'));
app.use(express.json());


// Routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});