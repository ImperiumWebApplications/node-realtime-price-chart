# BTC/USD Live Price Chart

This application displays a real-time chart of the BTC/USD price using live websocket feed data from the Binance exchange.

## Features

- Real-time updates of BTC/USD price
- Live updating line chart with per-second price data
- Hover functionality to view exact price and time for any point on the chart

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.0.0 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/node-realtime-price-chart.git
   ```

2. Navigate to the project directory:

   ```
   cd btc-usd-live-chart
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

1. Start the server:

   ```
   node app.js
   ```

2. Open a web browser and go to:
   ```
   http://localhost:3000
   ```

The application should now be running and displaying the live BTC/USD price chart.

## How It Works

- The server (app.js) connects to the Binance websocket feed to receive real-time BTC/USD price updates.
- The server forwards these updates to connected clients via WebSocket.
- The client-side JavaScript creates and updates a Chart.js chart with the received price data.
- The chart displays the last 5 minutes of price data, updating in real-time.

## Technologies Used

- Node.js
- Express.js
- WebSocket (ws)
- EJS (Embedded JavaScript templates)
- Chart.js

## Notes

- This application uses a public websocket feed from Binance. Be aware of any rate limits or terms of service that may apply.
- The chart shows data for the last 5 minutes (300 data points at 1 update per second). You can adjust this in the code if needed.

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly.
2. Check that the Binance websocket feed is accessible and working.
3. Ensure no other application is using port 3000 on your machine.

For any other problems, please open an issue in the GitHub repository.
