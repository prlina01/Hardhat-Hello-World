### Setup
- install `npm` and `npx` on your machine
- run `npm install` to set up all the dependencies (hardhat, ethers, etc.)
- create`.env` file and then fill in the environment variables with your own info
- set up an Alchemy account [here](https://alchemy.com/?r=TY3ODgzNDExMzQ1M)
- set up a [Metamask](https://metamask.io/download.html) wallet with [fake testnet ether](https://www.rinkebyfaucet.com//)

### Run:
- run `npx hardhat run scripts/deploy.js` to deploy the contract to the Rinkeby testnet
- run `npx hardhat run scripts/interact.js` to read and write a new message to the smart contract on Rinkeby
- run `npx hardhat verify --network ropsten <your deplooyment address> 'Hello World!'` or call `verify` method in `interact.js` to verify your contract on Etherscan
