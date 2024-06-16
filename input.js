let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === 'w') {
    console.log("Move: up");
    connection.write("Move: up");
  } else if (key === 'a') {
    console.log("Move: left");
    connection.write("Move: left");
  } else if (key === 's') {
    console.log("Move: down");
    connection.write("Move: down");
  } else if (key === 'd') {
    console.log("Move: right");
    connection.write("Move: right");
  }

  if (key === '1') {
    console.log("Say: Welcome to Snake!");
    connection.write("Say: Welcome to Snake!");
  } else if (key === '2') {
    console.log("Say: Hope you enjoy playing!");
    connection.write("Say: Hope you enjoy playing!");
  } else if (key === '3') {
    console.log("Say: Best of luck!");
    connection.write("Say: Best of luck!");
  } else if (key === '4') {
    console.log("Say: Great Job!");
    connection.write("Say: Great Job!");
  } else if (key === '5') {
    console.log("Say: See you next time!");
    connection.write("Say: See you next time!");
  }
};


module.exports = { setupInput };