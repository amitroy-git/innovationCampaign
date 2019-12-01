const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compilesFactory = require('./build/CampaignFactory.json');
const mnemonic = 'connect nice wolf camera spice spring security weekend boss quote blur forest';
const rinkebyAPI = 'https://rinkeby.infura.io/v3/23ca992ce76f4d3bb493fb06c9773e01';
const provider = new HDWalletProvider(
    mnemonic,
    rinkebyAPI,0
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('deploying from account ',accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compilesFactory.interface))
    .deploy({data: compilesFactory.bytecode, arguments: ['Campaign test']})
    .send({gas:'1000000', from:accounts[0]});

    console.log('contract deployed to ',result.options.address);
};
deploy();

