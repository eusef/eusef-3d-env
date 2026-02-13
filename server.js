const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const figlet = require('figlet');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const displayText = process.env.DISPLAY_TEXT || 'Hello World';

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getHtmlWithAsciiArt() {
  const asciiArt = figlet.textSync(displayText, { font: 'Standard' });
  const templatePath = path.join(__dirname, 'public', 'index.html');
  const template = fs.readFileSync(templatePath, 'utf8');
  return template.replace('{{ASCII_ART}}', escapeHtml(asciiArt));
}

app.get('/', (req, res) => {
  res.send(getHtmlWithAsciiArt());
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`ASCII Art 3D Demo running at http://localhost:${PORT}`);
  console.log(`Displaying: "${displayText}"`);
  console.log('Press Ctrl+C to stop');
});
