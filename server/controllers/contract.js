const contract = require('truffle-contract');
const Web3 = require('web3');
var provider = new Web3.providers.HttpProvider("http://localhost:8545");
const web3 = new Web3(provider);
const simplestorage_artifact = require('../../build/contracts/SimpleStorage.json');
var SimpleStorage = contract(simplestorage_artifact);
SimpleStorage.setProvider(web3.currentProvider);
SimpleStorage.defaults({ from: web3.eth.coinbase });
const self = {};
const setAccounts = () => {
    web3.eth.getAccounts(function (err, accs) {
        if (err != null) {
            reject({ err: "There was an error fetching your accounts." });
        }

        if (accs.length == 0) {
            reject({ err: "Couldn't get any accounts! Make sure your Ethereum client is configured correctly." });
        }
        self.accounts = [...accs];
        self.account = self.accounts[2];
    })};
    setAccounts();
    module.exports = {
        // start: () => new Promise((resolve, reject) => {
        //     self.web3 = web3;
           
        //     self.web3.eth.getAccounts(function (err, accs) {
        //         if (err != null) {
        //             reject({ err: "There was an error fetching your accounts." });
        //         }

        //         if (accs.length == 0) {
        //             reject({ err: "Couldn't get any accounts! Make sure your Ethereum client is configured correctly." });
        //         }
        //         self.accounts = [...accs];
        //         self.account = self.accounts[2];

        //         resolve({ accounts: self.accounts });
        //     });
        // }),
        set: (val) => new Promise((resolve, reject) => {
            
            var meta;
            SimpleStorage.deployed().then(function (instance) {
                meta = instance;
                console.log(self.account);

                meta.set(val, { from: self.account }).then(d => {
                    console.log(d);
                    resolve({ success: true })
                }).catch(err => {
                    console.log("meta err", err);

                })
            }).catch(err => {
                console.log("deployed err", err);

            })

        }),
        get: () => new Promise((resolve, reject) => {
            var meta;
            SimpleStorage.deployed().then(function (instance) {
                meta = instance;
                console.log(self.account);

                meta.get.call().then(d => {
                    console.log(d);
                    resolve({ success: true, val: d })
                }).catch(err => {
                    console.log("meta err", err);

                })
            }).catch(err => {
                console.log("deployed err", err);

            })

        })
    }