// https://eth-ropsten.alchemyapi.io/v2/KqvguaIxKrKgY-TCx3Edfefs-FEfxQYF


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KqvguaIxKrKgY-TCx3Edfefs-FEfxQYF',
      accounts: ['3451ec2192b067d0c0fcda9565b5cae1bd5d1ac6187f66443bf590bb6d5b6a37'],
    },
  },
};