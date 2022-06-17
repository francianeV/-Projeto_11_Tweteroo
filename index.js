import express from 'express';
import cors from 'cors';

const app = express(); 

app.get("/", (req, res) => {
    res.send('Hello World');
    
});

app.listen(5000);