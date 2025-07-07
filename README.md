# Expense Tracker

A simple web application to track your expenses. Add, view, and manage your daily spending with a clean interface.

## Features
- Add new expenses with name, amount, and date
- View a list of all expenses
- See the total amount spent
- Light/dark theme toggle

## Getting Started

### Prerequisites
- Docker (recommended) or any modern web browser

### Using Docker
1. Build and run the container:
   ```bash
   docker-compose up --build
   ```
2. Open your browser and go to `http://localhost:8080` (or the port specified in your `docker-compose.yml`).

### Manual Run
1. Open `index.html` in your browser.

## File Structure
- `index.html` - Main HTML file
- `script.js` - JavaScript logic for managing expenses
- `style.css` - Stylesheet
- `Dockerfile` & `docker-compose.yml` - For containerized deployment

## License
MIT
