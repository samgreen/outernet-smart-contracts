const Ownable = artifacts.require("./Ownable.sol");
const SafeMath = artifacts.require("./SafeMath.sol");
const SupportsInterface = artifacts.require("./SupportsInterface.sol");
const AddressUtils = artifacts.require("./AddressUtils.sol");
const TokenMeta = artifacts.require("./NFTokenMetadata.sol");
const Token = artifacts.require("./NFToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(SafeMath);
  await deployer.deploy(AddressUtils);
  await deployer.deploy(SupportsInterface);

  deployer.link(SafeMath, [Token]);
  deployer.link(SupportsInterface, [Token, TokenMeta]);
  deployer.link(AddressUtils, [Token, TokenMeta]);
  
  await deployer.deploy(TokenMeta)
  await deployer.deploy(Token)
  await deployer.deploy(Ownable)
};