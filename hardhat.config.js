require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "/Users/admin/Desktop/nft-collection-2/lw3-nft/.env" });

const GOERLI_URL = process.env.GOERLI_URL_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    },
  },
};
