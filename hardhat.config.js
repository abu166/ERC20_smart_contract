require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache local blockchain
      accounts: [
        "0x93456e77b25249a422392290099a65e46aaf68570a84d769dbf22c132c32a232",
        "0x050a4502e3c1a4b794bf58be01c3b6db7d89ba5f424c315092b4a4397a4583d0",
        // "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",c
        // "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a"
      ],
      // Disable ENS
      ens: { enabled: false },
    },
  },
};
