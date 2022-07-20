const ethers = require('ethers');
/*
  myWallet: 自分のウォレットアドレス
  tokenA: スワップ元のトークン
  tokenB: スワップ先のトークン
*/
module.exports.addresses = {
  myWallet: '0x000...', // 自分のWalletアドレス
  tokenA: '0x000...',
  tokenB: '0x000...',
};

module.exports.secretKey = '12345....'; // 秘密鍵

module.exports.gasPrice = ethers.utils.parseUnits('50', 'gwei').toString(); // ガス価格の設定
module.exports.minTokenPrice = 0; // token価格(USD)がこの値を下回ったとき、実行中止(設定しない場合は「0」を入力)

module.exports.nodes = []; // nodeの設定
