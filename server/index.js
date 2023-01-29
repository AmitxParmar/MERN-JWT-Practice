const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');

console.log('starting.....server...');

app.use(cors());
app.use(json());

mongoose.connect("mongodb://localhost:27017/full-mern-stack-auth")

app.post('/api/register', async (req, res) => {
    res.json({ status: 'ok' })
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' })
    } catch (err) {

    }
    res.json({ status: 'ok' })
})

app.listen(8000, () => {
    console.log('listening on http://localhost');
})

