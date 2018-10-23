<h1 align="center">
  <p align="center">Treacto</p>
  
</h1>
<p align="center">
  
[![GitHub issues](https://img.shields.io/github/issues/devaman/treacto.svg?style=for-the-badge)](https://github.com/devaman/treacto/issues)
[![GitHub forks](https://img.shields.io/github/forks/devaman/treacto.svg?style=for-the-badge)](https://github.com/devaman/treacto/network)
 [![GitHub stars](https://img.shields.io/github/stars/devaman/treacto.svg?style=for-the-badge)](https://github.com/devaman/treacto/stargazers) 
[![GitHub license](https://img.shields.io/github/license/devaman/treacto.svg?style=for-the-badge)](https://github.com/devaman/treacto/blob/master/LICENSE)
[![HitCount](http://hits.dwyl.io/devaman/treacto.svg?style=for-the-badge)](http://hits.dwyl.io/devaman/treacto)

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/treacto/Lobby)

  </p>
  
# Introduction

Treacto is a truffle box which can be used to create dapps.

Treacto uses ethereum to store the important piece of information on it. The other information that are not important to us can be stored in mongodb database.Its like offchain data-storage house as we have to pay more gas price to store large piece of information on ethereum chain.

> Technology used: Truffle, Reactjs, Redux, Nodejs, Passportjs(token based auth), mongodb, expressjs, ganache.

# Installation

1. Install Truffle and Ganache CLI globally. If you prefer, the graphical version of Ganache works as well!

```
npm install -g truffle
npm install -g ganache-cli
```

2. You can use the command <code>truffle unbox devaman/treacto</code> to create dapp.

3. Run ganache on localhost:8545 (Default)
```
ganache-cli
```
4. Install all the node modules required by running:
- in client folder
```
npm install
```
- in server folder
```
npm install
```
- in root folder
```
npm install
```
5. Create a database.js file in server/config/database.js having following content.
```
module.exports={
'secret':'mysecret',
'database':'mongodb://linktomongodb'
};
```

6. Compile and migrate the smart contracts.
```
truffle compile
truffle migrate --network ganache
```

6.Start the dapp.
```
npm start
```
It will start both client and server.

# Contributor

- [Amit Chambial](https://github.com/devaman/)
