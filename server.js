const path = require('path');
const os = require('os');

const express = require('express');
const figlet = require('figlet');
const fs = require('fs');

const app = express();
const PORT = 3000;

const displayText = process.env.DISPLAY_TEXT || 'No .ENV Present!';
const platform = process.env.PLATFORM || 'Development';

function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return null;
}

function clickableUrl(url) {
  return `\x1b]8;;${url}\x07${url}\x1b]8;;\x07`;
}

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
  return template
    .replace('{{ASCII_ART}}', escapeHtml(asciiArt))
    .replace('{{PLATFORM}}', escapeHtml(platform));
}

app.get('/', (req, res) => {
  res.send(getHtmlWithAsciiArt());
});

app.listen(PORT, '0.0.0.0', () => {
  const localUrl = `http://localhost:${PORT}`;
  const ip = getLocalIpAddress();
  const networkUrl = ip ? `http://${ip}:${PORT}` : null;

  console.log(`ASCII Art 3D Demo running at ${clickableUrl(localUrl)}`);
  if (networkUrl) {
    console.log(`  Network: ${clickableUrl(networkUrl)} (${ip})`);
  }
  console.log(`Displaying: "${displayText}"`);
  console.log('Press Ctrl+C to stop');
});
