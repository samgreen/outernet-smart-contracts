const ElderCoin = artifacts.require("./ElderCoin.sol");

contract('ElderCoin', (accounts) => {
  it('should mint 1 to the first account', async () => {
    const elderCoinInstance = await ElderCoin.deployed();
    await elderCoinInstance.mint(accounts[0], 1, "https://example.com/Eldercoin.json");
  });
});
