"use strict";

var path = require("path");

var Hapi = require("hapi");
var Joi = require("joi");

// Setup hapi
var server = new Hapi.Server(process.env.PORT || 4567,
  {
    views: {
      engines: {
        hbs: require("handlebars"),
      },
      path: path.join(__dirname, "/views"),
    }
  }
);

server.route([
  { method: "GET", path: "/{path*}", handler: { directory: { path: "./public", listing: false, index: true } } },
  {
    method: "GET",
    path: "/",
    handler: function (request, reply) {
      reply.view("index", {
      });
    },
  },
]);

// Start the show!
if (!module.parent) {
  server.start(function () {
    console.log("hapi-tdd-ttt started at %s", server.info.uri);
  });
}

module.exports = server;
