const express = require('express');
const FB = require('fb');
const app = express();

require('environment.env').config({ path: './public/environment.env' });

FB.options({
    appId: process.env.APP_ID,
    appSecret: process.env.APP_SECRET,
    version: 'v10.0'
});

const accessToken = process.env.ACCESS_TOKEN;

app.use(express.static('public'));

app.get('/facebook-data', (req, res) => {
    FB.api('/YOUR_PAGE_ID/feed', 'GET', { access_token: accessToken }, function (response) {
        if (response && !response.error) {
            res.json(response);
        } else {
            res.status(500).json({ error: response.error });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
