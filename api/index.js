const mockoon = require("@mockoon/serverless");
const express = require("express");

// Load the Mockoon Environment object
const mockEnv = require("../datafile.json");

const app = new mockoon.MockoonServerless(mockEnv);

const router = express().use(app.requestListener());

exports.default = router;

// exports.default = app;
