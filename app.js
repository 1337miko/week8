const express = require('express');
const path = require('path');
const cvData = require('./data/cv.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('cv', { cv: cvData });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});