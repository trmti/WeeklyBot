const ethers = require('ethers');
const router_address = '0x10ED43C718714eb63d5aA57B78B54704E256024E';

let failureCount = 0;

async function swap(account, tokenA, tokenB, amountIn) {
  try {
    console.log(`Start swapping from ${tokenA} to ${tokenB}`);
    const tokenA_contract = new ethers.Contract(
      tokenA,
      [
        'function approve(address spender, uint amount) public returns(bool)',
        'function balanceOf(address account) external view returns (uint256)',
      ],
      account
    );
    const router = new ethers.Contract(
      router_address,
      [
        'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)',
        'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
      ],
      account
    );
    let tx = await tokenA_contract.functions.approve(
      router.address,
      ethers.BigNumber.from('1' + '0' * 30)
    );
    let receipt = await tx.wait();
    console.log(receipt);

    const amounts = await router.getAmountsOut(amountIn, [tokenA, tokenB]);
    const amountOutMin = amounts[1].sub(amounts[1].div(10));
    console.log(`
      Buying new token
      =================
      tokenIn: ${(amountIn / 10 ** 18).toString()} ${tokenA}
      tokenOut: ${(amountOutMin / 10 ** 18).toString()} ${tokenB}
    `);
    tx = await router.swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      [tokenA, tokenB],
      account.address,
      Date.now() + 1000 * 60 * 10 //10 minutes
    );
    receipt = await tx.wait();

    console.log('Transaction receipt');
    console.log(receipt);
    console.log('Your swap succeed!');
    failureCount = 0;
  } catch (err) {
    failureCount++;
    if (failureCount === 10) {
      return;
    }
    setTimeout(() => {
      swapAllToken(account, tokenA, tokenB);
    }, 10000);
  }
}

module.exports.swap = swap;
