const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const pidFile = path.join(__dirname, '.server.pid');

const child = spawn('node', ['server.js'], {
  stdio: 'inherit',
  detached: true,
  cwd: __dirname,
});

child.unref();

fs.writeFileSync(pidFile, String(child.pid));
console.log(`Server started with PID ${child.pid}`);
console.log('Run "npm stop" to stop the server');
