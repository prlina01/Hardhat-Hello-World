const { ethers, run} = require('hardhat');

const API_KEY= process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const contract = (require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json'))

const alchemyProvider = new ethers.providers.AlchemyProvider("rinkeby", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

const verify = async () => {
    const message = await helloWorldContract.message();
    await run('verify:verify', {
        address: CONTRACT_ADDRESS,
        constructorArguments: [
            message
        ]
    })
}

async function main() {
    const message = await helloWorldContract.message();
    console.log('message: ' + message)
    console.log('Updating the message....')
    const tx = await helloWorldContract.update('Updated message VOL 2!')
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log('New message: ' + newMessage);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error); process.exit()
    });
