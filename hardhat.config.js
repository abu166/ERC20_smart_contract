require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache local blockchain
      accounts: [
        "0xf7e3b23d475e2a049e47787541bd03463c647e2330c3174efabd77dbc75a61fe",
        "0xdd5edc02495ef827dc2b53393ae23ac16a13fdd4cb06b7402aba4bc5a9f92ed9",
        "0x3b815a133b25cfd9f3f749e54b4970d7fb3c82dd5be6698ce74119115e602696"
      ],
      // Disable ENS
      ens: { enabled: false },
    },
  },
};
