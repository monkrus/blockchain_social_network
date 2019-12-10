//connect smart contract
const SocialNetwork = artifacts.require('./SocialNetwork.sol')

//connect chai library
require('chai')
.use(require(`chai-as-promised`))
.should()

//test code will be written here,
//callback function contains all the Ganache accounts
//socialNetwork represents the deployed smart contract
contract('SocialNetwork', ([deployer, author, tipper]) => {
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

describe('posts', async () => {

let result, postCount

it('creates posts' , async() => {	
result =  await socialNetwork.createPost('This is my first post', {from: author})
postCount = await socialNetwork.postCount()
//SUCCESS
assert.equal(postCount, 1)
const event =  result.logs[0].args
assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct')
assert.equal(event.content, 'This is my first post', 'content is correct')
assert.equal(event.tipAmount, '0', 'tip amount is correct')
assert.equal(event.author, author, 'author is correct')
//console.log(event)
//FAILURE
await socialNetwork.createPost('', {from: author}).should.be.rejected;
})

it(' lists posts' , async() => {	
})

it('allows users to tipper posts' , async() => {	

})
})
})
