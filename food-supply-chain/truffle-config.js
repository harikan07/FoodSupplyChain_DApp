module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: ganache-cli)
      port: 8545,            // Standard Ethereum port (default: 8545)
      network_id: "*",       // Any network (default: "*")
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",     // Specify compiler version
    },
  },
};
