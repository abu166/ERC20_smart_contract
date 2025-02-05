require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache local blockchain
      accounts: [
        "0x050a4502e3c1a4b794bf58be01c3b6db7d89ba5f424c315092b4a4397a4583d0",
        "0xb091f6d87b0170e0bb81c38052145ee0eb611e81a39cd6b607d6d343fbc20af0",
        "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
        // "0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a"
      ],
      // Disable ENS
      ens: { enabled: false },
    },
  },
};
