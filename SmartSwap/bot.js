const ethers = require('ethers');
const abi = require('./bot.json');
const { swapAllToken } = require('./swap.js');
const { addresses, secretKey } = require('./config.js');
bsc_rpc =
  'https://restless-spring-wildflower.bsc.discover.quiknode.pro/41bcc6bd92c8da817de28a078d42e0ab8a80b6c1/';
const provider = new ethers.providers.JsonRpcProvider(bsc_rpc, {
  name: 'binance',
  chainId: 56,
});

const wallet = new ethers.Wallet(secretKey);
const account = wallet.connect(provider);

const contract = new ethers.Contract(addresses.tokenA, abi, provider);
const filter = contract.filters.Transfer(null, addresses.myWallet);

contract.on(filter, () => {
  console.log('You got New asset!');
  swapAllToken(account, addresses.tokenA, addresses.tokenB);
});
