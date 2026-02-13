const path = require('path');

const express = require('express');
const figlet = require('figlet');
const fs = require('fs');

const app = express();
const PORT = 3000;

const displayText = process.env.DISPLAY_TEXT || 'No .ENV Present!';

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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ASCII Art 3D Demo running at http://localhost:${PORT}`);
  console.log(`Displaying: "${displayText}"`);
  console.log('Press Ctrl+C to stop');
});
