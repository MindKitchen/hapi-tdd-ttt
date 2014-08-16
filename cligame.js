"use strict";

var TicTacToe = require("./lib/tictactoe");

var ttt = new TicTacToe();

function ask(question, format, callback) {
  var stdin = process.stdin, stdout = process.stdout;

  stdin.resume();
  stdout.write(question + ": ");

  stdin.once("data", function(data) {
    data = data.toString().trim();

    if (format.test(data)) {
      callback(data);
    } else {
      stdout.write("Enter moves in the form row,column (e.g. 1,1 or 2,0)\n");
      ask(question, format, callback);
    }
  });
}

function playgame() {
  // Display the current board
  console.log("\n" + ttt.toString() + "\n");

  ask(ttt.currentPlayer(), /^\d,\d$/, function (position) {
    // Input format: row,col
    // Example: 2,0
    position = position.split(",");
    position = { row: position[0], column: position[1] };
    ttt.play(position);

    if (!ttt.winner() && !ttt.isStalemate()) {
      playgame();
      return;
    } else if (ttt.winner()) {
      console.log("\n%s wins!\n", ttt.winner());
    } else if (ttt.isStalemate()) {
      console.log("\nStalemate!\n");
    }

    console.log(ttt.toString());
    process.stdin.pause();
  });
}

playgame();
