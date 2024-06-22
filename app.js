const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

let latestPrice = "Waiting for data...";

const binanceWs = new WebSocket(
  "wss://stream.binance.com:9443/ws/btcusdt@trade"
);

binanceWs.on("message", (data) => {
  const trade = JSON.parse(data);
  latestPrice = parseFloat(trade.p).toFixed(2);

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        JSON.stringify({
          price: latestPrice,
          timestamp: new Date().toISOString(),
        })
      );
    }
  });
});

app.get("/", (req, res) => {
  res.render("index", { price: latestPrice });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
