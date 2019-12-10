## Prerequisites (for Ubuntu 18.04)

1. Check node version `nodejs --version`

2. Download Ganache (https://github.com/trufflesuite/ganache/releases). Select :heavy_check_mark: `Allow executing...` under permissions in installation file.

3. Install truffle `npm install -g truffle` Check versions by typing `npm -v` and `truffle -v`

4. Install MetaMask

5. In this tutorial we use a premade template

6. Check all files in the project `ls -l`

7. Install dependencies `npm install`

8. Start the development server `npm run start`

## Steps

1. Compile with `truffle compile` (after writing a basic smart contract)

2. Migrate with `truffle migrate` (after writing a migration file)

3. Interact with the console (JS runtime environment)by typing `truffle console`

4. We are using asynchronous pattern
`contract = await SocialNetwork.deployed()` 

`contract`

`contract.address`

5. From there we can search for a

`name = await contract.name()`

`name`

## Tests

1. Run `truffle test` .Please read the comments in the SocialNetwork.js file

2. Without `memory` keyword, Solidity tried to declare var in storage. STRUCURE of the storage cannot be changed by future method calls.CONTENT of the storage can be changed by sendTranaction call. 

3. The Ethereum Virtual Machine has three areas where it can store items.

- The first is “storage”, where all the contract state variables reside. Every contract has   
  its own storage and it is persistent between function calls and quite expensive to use.

- The second is “memory”, this is used to hold temporary values. It is erased between 
  (external) function calls and is cheaper to use.

- The third one is the stack, which is used to hold small local variables. It is almost free to use, but can only hold a limited amount of values.

For almost all types, you cannot specify where they should be stored, because they are copied everytime they are used.

4.tbc
















