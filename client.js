const net = require("net");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data and log it to the console
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };