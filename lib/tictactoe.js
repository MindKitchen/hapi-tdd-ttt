"use strict";

function TicTacToe(options) {
  options = options || {};

  var currentPlayer = options.currentPlayer || "x";

  this.currentPlayer = function () {
    return currentPlayer;
  };

  this.nextPlayer = function () {
    currentPlayer = (currentPlayer === "x") ? "o" : "x";
  };

  this.board = options.board || [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
  ];
}

TicTacToe.prototype.isFull = function () {
  var check = true;

  for(var row = 0; row < this.board.length; row++) {
    for(var column = 0; column < this.board[row].length; column++) {
      if (this.board[row][column] === ".") {
        check = false;
      }
    }
  }

  return check;
};

TicTacToe.prototype.winner = function() {
  var winner = undefined;

  for (var row = 0; row < this.board.length; row++) {
    winner = this.checkRow(row) || winner;
  }

  for (var column = 0; column < this.board[0].length; column++) {
    winner = this.checkColumn(column) || winner;
  }

  for (var diagonal = 0; diagonal < 2; diagonal++) {
    winner = this.checkDiagonal(diagonal) || winner;
  }

  return winner;
};

TicTacToe.prototype.isStalemate = function () {
  return this.isFull() && (this.winner() === undefined);
};

TicTacToe.prototype.checkString = function (check) {
  if (check === "xxx") {
    return "x";
  }
  else if (check === "ooo") {
    return "o";
  }

  return;
};

TicTacToe.prototype.checkRow = function (row) {
  var check = "";

  for (var column = 0; column < this.board[row].length; column++) {
    check = check + this.board[row][column];
  }

  return this.checkString(check);
};

TicTacToe.prototype.checkColumn = function (column) {
  var check = "";

  for (var row = 0; row < this.board.length; row++) {
    check = check + this.board[row][column];
  }

  return this.checkString(check);
};

TicTacToe.prototype.checkDiagonal = function (diagonal) {
  var check = "";

  for (var i = 0; i < this.board.length; i++) {
    check = check + this.board[diagonal ? (this.board.length - i - 1) : i][i];
  }

  return this.checkString(check);
};

TicTacToe.prototype.play = function (position) {
  if (this.board[position.row][position.column] === ".") {
    this.board[position.row][position.column] = this.currentPlayer();
    this.nextPlayer();
  }
};

TicTacToe.prototype.toString = function() {
  var string = "";

  for(var x = 0; x < this.board.length; x++) {
    for(var y = 0; y < this.board[x].length; y++) {
      string += this.board[x][y];
    }

    if (x < this.board.length - 1) {
      string += "\n";
    }
  }

  return string;
};

module.exports = TicTacToe;
