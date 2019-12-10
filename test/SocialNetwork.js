//connect smart contract
const SocialNetwork = artifacts.require('./SocialNetwork.sol')

//connect chai library
require('chai')
.use(require(`chai-as-promised`))
.should()

//test code will be written here,
//callback function contains all the Ganache accounts
//socialNetwork represents the deployed smart contract
contract('SocialNetwork', (accounts) => {
 
 let socialNetwork

//adding before reduces duplication
 before (async () => {
//we check the deployment of the SocilaNetwork
	socialNetwork = await SocialNetwork.deployed()
})

describe('deployment',async () =>  {
it ('deploys succesfully', async () => {
	//we check the adress of the socialNetwork (as deployed)
	const address = await socialNetwork.address
	assert.notEqual(address, 0x0)
	assert.notEqual(address, '')
	assert.notEqual(address, null)
	assert.notEqual(address, undefined)
})

it ('has a name', async() => {
const name = await socialNetwork.name()
assert.equal(name, 'Berlin forever')

})
})
})


