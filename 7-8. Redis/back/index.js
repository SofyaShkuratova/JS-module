const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
const client = redis.createClient();

app.use(cors());
app.use(express.json());

client.on('error', (err) => console.log(err));

app.get('/api/getresult', async (req, res) =>{
    await client.connect();
    const serial = await client.get('serial');
    const movie = await client.get('movie');
    const book = await client.get('book');
    res.json({serial, movie, book})
    await client.disconnect();
});

app.post('/api/setresult', async (req, res) => {
    await client.connect();
    await client.incr(req.body.value);
    const serial = await client.get('serial');
    const movie = await client.get('movie');
    const book = await client.get('book');
    res.json({serial, movie, book})
    await client.disconnect();
});

app.listen(3004, async () => {
    console.log('Server started!');
    // await client.connect();
    // await client.set('serial', '0');
    // await client.set('movie', '0');
    // await client.set('book', '0');
    // await client.disconnect();
});