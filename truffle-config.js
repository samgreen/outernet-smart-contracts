const HDWalletProvider = require("truffle-hdwallet-provider");
const teamsMnemonic = process.env.TRUFFLE_MNEMONIC;

module.exports = {
  compilers: {
    solc: {
      version: "0.6.2",
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    teams: {
      provider: function() {
        return new HDWalletProvider(teamsMnemonic, "https://sandbox.truffleteams.com/c0c31dd9-9b5f-418f-b0fe-41101012912f", 0, 10, false);
      },
      network_id: 1595038350520
    },
  },
};
