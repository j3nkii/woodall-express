# Woodall Express Notes
- npm init --yes
- npm === node package manager;
- add express $ npm install express
- JSON javascript object notation
- tell git to ignore shit like node modules, which is huge
- killall -9 node to kill all servers on comp
- Control C to kill current erver in terminal

# Steps for setup
- npm init
- npm install express
- .gitignore w/ node_modules
- setp up express in a JS file using: const express = require('express')
- set port
- set handle requests, (request, response)
- app.use(express.static('server/public')); to set up endpoints (urls for server) 