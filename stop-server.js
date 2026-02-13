const fs = require('fs');
const path = require('path');

const pidFile = path.join(__dirname, '.server.pid');

if (!fs.existsSync(pidFile)) {
  console.log('No server PID file found. Run "npm run start:bg" first, or use Ctrl+C to stop a foreground server.');
  process.exit(1);
}

const pid = parseInt(fs.readFileSync(pidFile, 'utf8'), 10);
fs.unlinkSync(pidFile);

try {
  process.kill(pid, 'SIGTERM');
  console.log(`Server (PID ${pid}) stopped`);
} catch (e) {
  if (e.code === 'ESRCH') {
    console.log(`Process ${pid} is not running`);
  } else {
    console.error(`Could not stop server: ${e.message}`);
    process.exit(1);
  }
}
