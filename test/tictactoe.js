"use strict";

var Lab = require("lab");

var TicTacToe = require("../lib/tictactoe");

Lab.experiment("TicTacToe", function () {
  Lab.test("creates a new, blank board", function (done) {
    var ttt = new TicTacToe();
    Lab.expect(ttt.board).to.exist;
    done();
  });

  Lab.test("creates a pre-populated board", function (done) {
    var testBoard = [
      ["x", "o", "."],
      [".", "x", "o"],
      [".", ".", "x"]
    ];

    var tttOptions = {
      board: testBoard,
    };

    var ttt = new TicTacToe(tttOptions);
    Lab.expect(ttt.board).to.equal(testBoard);
    done();
  });

  Lab.test("winner returns undefined if there is no winner", function (done) {
    var t = new TicTacToe({
    });

    Lab.expect(t.winner()).to.be.undefined;
    done();
  });

  Lab.test("checks a row for a winner", function (done) {
    var testBoard1 = [
      ["x", "x", "x"],
      [".", ".", "o"],
      ["o", ".", "."]
    ];

    var t1 = new TicTacToe({
      board: testBoard1,
    });

    Lab.expect(t1.checkRow(0)).to.equal("x");
    Lab.expect(t1.checkRow(1)).to.be.undefined;
    Lab.expect(t1.checkRow(2)).to.be.undefined;

    var testBoard2 = [
      ["o", "o", "o"],
      ["x", ".", "x"],
      ["x", ".", "."]
    ];

    var t2 = new TicTacToe({
      board: testBoard2,
    });

    Lab.expect(t2.checkRow(0)).to.equal("o");
    Lab.expect(t2.checkRow(1)).to.be.undefined;
    Lab.expect(t2.checkRow(2)).to.be.undefined;

    var testBoard3 = [
      [".", "o", "o"],
      ["x", "x", "x"],
      ["o", ".", "."]
    ];

    var t3 = new TicTacToe({
      board: testBoard3,
    });

    Lab.expect(t3.checkRow(0)).to.be.undefined;
    Lab.expect(t3.checkRow(1)).to.equal("x");
    Lab.expect(t3.checkRow(2)).to.be.undefined;

    var testBoard4 = [
      [".", "x", "x"],
      ["o", "o", "o"],
      ["x", ".", "."]
    ];

    var t4 = new TicTacToe({
      board: testBoard4,
    });

    Lab.expect(t4.checkRow(0)).to.be.undefined;
    Lab.expect(t4.checkRow(1)).to.equal("o");
    Lab.expect(t4.checkRow(2)).to.be.undefined;

    var testBoard5 = [
      ["o", "x", "o"],
      [".", "o", "."],
      ["x", "x", "x"]
    ];

    var t5 = new TicTacToe({
      board: testBoard5,
    });

    Lab.expect(t5.checkRow(0)).to.be.undefined;
    Lab.expect(t5.checkRow(1)).to.be.undefined;
    Lab.expect(t5.checkRow(2)).to.equal("x");

    var testBoard6 = [
      ["x", ".", "x"],
      [".", "x", "."],
      ["o", "o", "o"]
    ];

    var t6 = new TicTacToe({
      board: testBoard6,
    });

    Lab.expect(t6.checkRow(0)).to.be.undefined;
    Lab.expect(t6.checkRow(1)).to.be.undefined;
    Lab.expect(t6.checkRow(2)).to.equal("o");

    done();
  });

  Lab.test("checks a column for a winner", function (done) {
    var testBoard1 = [
      ["x", ".", "."],
      ["x", ".", "o"],
      ["x", "o", "."]
    ];

    var t1 = new TicTacToe({
      board: testBoard1,
    });

    Lab.expect(t1.checkColumn(0)).to.equal("x");
    Lab.expect(t1.checkColumn(1)).to.be.undefined;
    Lab.expect(t1.checkColumn(2)).to.be.undefined;

    var testBoard2 = [
      ["o", ".", "x"],
      ["o", ".", "x"],
      ["o", "x", "."]
    ];

    var t2 = new TicTacToe({
      board: testBoard2,
    });

    Lab.expect(t2.checkColumn(0)).to.equal("o");
    Lab.expect(t2.checkColumn(1)).to.be.undefined;
    Lab.expect(t2.checkColumn(2)).to.be.undefined;

    var testBoard3 = [
      ["o", "x", "."],
      [".", "x", "."],
      ["o", "x", "o"]
    ];

    var t3 = new TicTacToe({
      board: testBoard3,
    });

    Lab.expect(t3.checkColumn(0)).to.be.undefined;
    Lab.expect(t3.checkColumn(1)).to.equal("x");
    Lab.expect(t3.checkColumn(2)).to.be.undefined;

    var testBoard4 = [
      ["x", "o", "."],
      [".", "o", "x"],
      ["x", "o", "."]
    ];

    var t4 = new TicTacToe({
      board: testBoard4,
    });

    Lab.expect(t4.checkColumn(0)).to.be.undefined;
    Lab.expect(t4.checkColumn(1)).to.equal("o");
    Lab.expect(t4.checkColumn(2)).to.be.undefined;

    var testBoard5 = [
      ["o", "o", "x"],
      [".", ".", "x"],
      [".", "o", "x"]
    ];

    var t5 = new TicTacToe({
      board: testBoard5,
    });

    Lab.expect(t5.checkColumn(0)).to.be.undefined;
    Lab.expect(t5.checkColumn(1)).to.be.undefined;
    Lab.expect(t5.checkColumn(2)).to.equal("x");

    var testBoard6 = [
      ["x", ".", "o"],
      [".", ".", "o"],
      ["x", "x", "o"]
    ];

    var t6 = new TicTacToe({
      board: testBoard6,
    });

    Lab.expect(t6.checkColumn(0)).to.be.undefined;
    Lab.expect(t6.checkColumn(1)).to.be.undefined;
    Lab.expect(t6.checkColumn(2)).to.equal("o");

    done();
  });

  Lab.test("checks diagonals for a winner", function (done) {
    var testBoard1 = [
      ["x", ".", "o"],
      [".", "x", "o"],
      ["o", ".", "x"]
    ];

    var t1 = new TicTacToe({
      board: testBoard1,
    });

    Lab.expect(t1.checkDiagonal(0)).to.equal("x");
    Lab.expect(t1.checkDiagonal(1)).to.be.undefined;

    var testBoard2 = [
      ["o", ".", "x"],
      ["x", "o", "x"],
      ["x", ".", "o"]
    ];

    var t2 = new TicTacToe({
      board: testBoard2,
    });

    Lab.expect(t2.checkDiagonal(0)).to.equal("o");
    Lab.expect(t2.checkDiagonal(1)).to.be.undefined;

    var testBoard3 = [
      ["o", ".", "x"],
      [".", "x", "o"],
      ["x", ".", "o"]
    ];

    var t3 = new TicTacToe({
      board: testBoard3,
    });

    Lab.expect(t3.checkDiagonal(0)).to.be.undefined;
    Lab.expect(t3.checkDiagonal(1)).to.equal("x");


    var testBoard4 = [
      ["x", ".", "o"],
      [".", "o", "x"],
      ["o", ".", "x"]
    ];

    var t4 = new TicTacToe({
      board: testBoard4,
    });

    Lab.expect(t4.checkDiagonal(0)).to.be.undefined;
    Lab.expect(t4.checkDiagonal(1)).to.equal("o");

    done();
  });

  Lab.test("tests overall game for a winner", function (done) {
    var testBoard1 = [
      ["x", "x", "x"],
      [".", ".", "o"],
      ["o", ".", "."]
    ];

    var t1 = new TicTacToe({
      board: testBoard1,
    });

    Lab.expect(t1.winner()).to.equal("x");

    var testBoard2 = [
      ["o", "o", "o"],
      ["x", ".", "x"],
      [".", ".", "."]
    ];

    var t2 = new TicTacToe({
      board: testBoard2,
    });

    Lab.expect(t2.winner()).to.equal("o");

    var testBoard3 = [
      ["x", "o", "."],
      ["x", ".", "o"],
      ["x", ".", "."]
    ];

    var t3 = new TicTacToe({
      board: testBoard3,
    });

    Lab.expect(t3.winner()).to.equal("x");

    var testBoard4 = [
      [".", "o", "."],
      [".", "o", "x"],
      ["x", "o", "."]
    ];

    var t4 = new TicTacToe({
      board: testBoard4,
    });

    Lab.expect(t4.winner()).to.equal("o");

    var testBoard5 = [
      ["o", "x", "."],
      [".", "o", "x"],
      [".", ".", "o"]
    ];

    var t5 = new TicTacToe({
      board: testBoard5,
    });

    Lab.expect(t5.winner()).to.equal("o");

    done();
  });

  Lab.test("knows if board is full", function (done) {
    var testBoard1 = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "x"]
    ];

    var t1 = new TicTacToe({
      board: testBoard1
    });

    Lab.expect(t1.isFull()).to.be.true;

    var testBoard2 = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "."]
    ];

    var t2 = new TicTacToe({
      board: testBoard2
    });

    Lab.expect(t2.isFull()).to.be.false;

    done();
  });

  Lab.test("knows when the game is in stalemate", function (done) {
    var testBoard1 = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "x"]
    ];

    var t1 = new TicTacToe({
      board: testBoard1
    });

    Lab.expect(t1.isStalemate()).to.be.true;

    var testBoard2 = [
      ["x", "o", "x"],
      ["x", "o", "o"],
      ["o", "x", "."]
    ];

    var t2 = new TicTacToe({
      board: testBoard2
    });

    Lab.expect(t2.isStalemate()).to.be.false;

    var testBoard3 = [
      ["x", "o", "x"],
      ["o", "o", "x"],
      ["o", "x", "x"]
    ];

    var t3 = new TicTacToe({
      board: testBoard3
    });

    Lab.expect(t3.isStalemate()).to.be.false;

    done();
  });

  Lab.test("knows who the current player is", function (done) {
    var t1 = new TicTacToe({
    });

    Lab.expect(t1.currentPlayer()).to.equal("x");

    var t2 = new TicTacToe({
      currentPlayer: "o"
    });

    Lab.expect(t2.currentPlayer()).to.equal("o");

    done();
  });

  Lab.test("has its own toString", function (done) {
    var t1 = new TicTacToe();
    Lab.expect(t1.toString()).to.equal("...\n...\n...\n");
    done();
  });
});
