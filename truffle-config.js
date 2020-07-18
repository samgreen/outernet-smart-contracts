const HDWalletProvider = require("truffle-hdwallet-provider");
const HDWalletPrivateKeyProvider = require("truffle-hdwallet-provider-privkey");
const teamsMnemonic = process.env.TRUFFLE_MNEMONIC;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_WALLET_PRIV_KEY
const TRUFFLE_SANDBOX_KEY = process.env.TRUFFLE_SANDBOX_KEY

module.exports = {
  compilers: {
    solc: {
      version: "0.6.11",
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    teams: {
      provider: function() {
        return new HDWalletProvider(teamsMnemonic, "https://sandbox.truffleteams.com/" + TRUFFLE_SANDBOX_KEY, 0, 10, false);
      },
      network_id: 1595038350520
    },
    ropsten: {
      provider: function() {
        return new HDWalletPrivateKeyProvider([ROPSTEN_PRIVATE_KEY], "https://ropsten.infura.io/v3/" + process.env.WEB3_INFURA_PROJECT_ID)
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
};
