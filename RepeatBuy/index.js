const ethers = require('ethers');
const abi = require('./bot.json');
const { swap } = require('./swap.js');
const {
  repeatNum,
  waitDuration,
  buyToken,
  payToken,
  addresses,
  secretKey,
} = require('./config.my.js');
