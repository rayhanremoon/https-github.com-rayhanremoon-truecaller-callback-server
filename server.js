const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Truecaller callback URL endpoint
app.post('/callback', (req, res) => {
    console.log('Received callback data:', req.body);
    res.status(200).send('Callback received');
});

// Truecaller homeback URL endpoint
app.post('/homeback', (req, res) => {
    console.log('Received homeback data:', req.body);
    res.status(200).send('Homeback received');
});

// Privacy Policy endpoint
app.get('/privacy-policy', (req, res) => {
    res.send('<h1>Privacy Policy</h1><p>Your privacy policy details go here.</p>');
});

// Terms of Service endpoint
app.get('/terms-of-service', (req, res) => {
    res.send('<h1>Terms of Service</h1><p>Your terms of service details go here.</p>');
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Truecaller Callback Server is Running');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
