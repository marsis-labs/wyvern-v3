console.log("[Fixture] -4-4-4-4");

const WyvernAtomicizer = artifacts.require('WyvernAtomicizer')
console.log("[Fixture] -3-3-3-3");

const WyvernStatic = artifacts.require('WyvernStatic')
console.log("[Fixture] -2-2-2-3");

const WyvernRegistry = artifacts.require('WyvernRegistry')
const AuthenticatedProxy = artifacts.require('AuthenticatedProxy')
const OwnableDelegateProxy = artifacts.require('OwnableDelegateProxy')
const TestAuthenticatedProxy = artifacts.require('TestAuthenticatedProxy')
const TestERC20 = artifacts.require('TestERC20')
const TestERC721 = artifacts.require('TestERC721')
const TestERC1155 = artifacts.require('TestERC1155')

const {wrap,ZERO_BYTES32,CHAIN_ID,NULL_SIG,assertIsRejected} = require('./aux')

const WyvernExchange = artifacts.require('WyvernExchange')

module.exports = async () => {

console.log("[Fixture] 0000");

const wyvernAtomicizer = await WyvernAtomicizer.new();
WyvernAtomicizer.setAsDeployed(wyvernAtomicizer);
console.log("[Fixture] 1111-0");

const wyvernStatic = await WyvernStatic.new(wyvernAtomicizer.address);
WyvernStatic.setAsDeployed(wyvernStatic);
console.log("[Fixture] 1111-1");

const registry = await WyvernRegistry.new();
WyvernRegistry.setAsDeployed(registry);
console.log("[Fixture] 1111-2");

const authentyProxy = await AuthenticatedProxy.new();
AuthenticatedProxy.setAsDeployed(authentyProxy);
console.log("[Fixture] 1111-3");

const erc20 = await TestERC20.new();
TestERC20.setAsDeployed(erc20);
console.log("[Fixture] 1111-33");

const testProxy = await TestAuthenticatedProxy.new();
TestAuthenticatedProxy.setAsDeployed(testProxy);
console.log("[Fixture] 1111-5");

const erc721 = await TestERC721.new();
TestERC721.setAsDeployed(erc721);
console.log("[Fixture] 1111-51");

const erc1155 = await TestERC1155.new();
TestERC1155.setAsDeployed(erc1155);
console.log("[Fixture] 1111-1155");

const exchange = WyvernExchange.new(CHAIN_ID,[registry.address],'0x');
WyvernExchange.setAsDeployed(exchange);
console.log("[Fixture] 1111-6");

// constructor(address owner, address initialImplementation, bytes memory data)
// const ownerProxy = await OwnableDelegateProxy.new();
// OwnableDelegateProxy.setAsDeployed(ownerProxy);
// console.log("[Fixture] 1111-4");

console.log("[Fixture] 1111");

}