const express = require('express');
const FB = require('fb');
const app = express();

FB.options({
  appId: '410471542140090',       
  appSecret: '2eede93485986516aa19eb221d4ec417',
  version: 'v10.0'
});

const accessToken = gitignore ; 
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
