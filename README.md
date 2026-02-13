# ASCII Art 3D Demo

A Node.js web application that reads an environment variable, converts its value to ASCII art using [figlet](https://www.npmjs.com/package/figlet), and displays it with a smooth 3D rotation animation.

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

The app will be available at **http://localhost:3000**.

- **Foreground** (default): The server runs in the foreground—press **Ctrl+C** to stop it.
- **Background**: Run `npm run start:bg` to start in the background, then `npm stop` to stop it.

## Customizing the Display Text

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

If `DISPLAY_TEXT` is not set, the default is `"Hello World"`.

## Configuration

- **PORT** – Server port (default: 3000)
- **DISPLAY_TEXT** – Text to convert to ASCII art (default: "Hello World")
