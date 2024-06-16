const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// Connect to the server and store the connection object
const connection = connect();

// Pass that connection object to `setupInput`
setupInput(connection);
