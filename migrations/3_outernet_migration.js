const ElderCoin = artifacts.require("./ElderCoin.sol");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(ElderCoin)
  const elderCoin = await ElderCoin.deployed()
  elderCoin.mint(accounts[0], 1000, "https://example.com/ElderCoin.json")
};