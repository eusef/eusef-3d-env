# ASCII Art 3D Demo

A Node.js web application that reads environment variables, converts `DISPLAY_TEXT` to ASCII art using [figlet](https://www.npmjs.com/package/figlet), and displays it with a smooth 3D rotation animation. A platform label (from `PLATFORM`) appears in red below the ASCII art.

## Installation

```bash
npm install
```

## Running the App

```bash
node server.js
```

Or use the npm script:

```bash
npm start
```

The app listens on `0.0.0.0` and is available at **http://localhost:3000**. On startup, the console prints clickable URLs for both localhost and your network IP address (when available).

- **Foreground** (default): The server runs in the foreground—press **Ctrl+C** to stop it.
- **Background**: Run `npm run start:bg` to start in the background, then `npm stop` to stop it.

## Environment Variables

### DISPLAY_TEXT

The text to convert to ASCII art and display with 3D rotation.

- **Default**: `"No .ENV Present!"` when not set

**Option 1: Use a `.env` file** (recommended)

Copy `.env.example` to `.env` and edit it:

```bash
cp .env.example .env
```

Then set `DISPLAY_TEXT` in `.env`:

```
DISPLAY_TEXT=Cursor Rules!
```

**Option 2: Set inline when running**

```bash
DISPLAY_TEXT="Cursor Rules!" node server.js
```

On Windows (Command Prompt):

```cmd
set DISPLAY_TEXT=Cursor Rules!
node server.js
```

### PLATFORM

The platform label shown in red below the ASCII art.

- **Default**: `"Development"` when not set

Set when running:

```bash
PLATFORM=Production node server.js
```

Or add to `.env`:

```
PLATFORM=Production
```

## Configuration

| Variable     | Description                          | Default              |
| ------------ | ------------------------------------ | -------------------- |
| PORT         | Server port                          | 3000                 |
| DISPLAY_TEXT | Text to convert to ASCII art         | `"No .ENV Present!"` |
| PLATFORM     | Platform label (displayed in red)    | `"Development"`      |
