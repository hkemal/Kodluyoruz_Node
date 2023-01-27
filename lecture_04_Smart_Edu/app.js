const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Index sayfasi');
});

const port = 3002;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
