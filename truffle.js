var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "plug gaze game pact lamp mean pilot bread parent finger logic mercy";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  mocha: {
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      mochaFile: 'TEST-truffle.xml'
    }
  },
  networks: {
    azure: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "http://eth5kzzgs-dns-reg1.westus.cloudapp.azure.com:8540", 0)
      },
      gasPrice : 0,
      network_id: "*"
    }
  }
};
