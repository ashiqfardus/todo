const express = require('express');
const redis = require('redis');
const app = express();

// Create a Redis client instance
const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379,
});

redisClient.connect();

// Set a value in Redis
redisClient.set('myKey', 'myValue', (err, reply) => {
    if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }

    console.log('Value set in Redis:', reply);
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});