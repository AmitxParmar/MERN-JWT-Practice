const express = require('express');

console.log('starting.....server...');
const app = express();
app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(8000, () => {
    console.log('listening on http://localhost');
})

