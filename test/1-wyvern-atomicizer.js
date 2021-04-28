/* global artifacts:false, it:false, contract:false, assert:false */
 
const wyvernAtomicizer = artifacts.require('WyvernAtomicizer')

contract('WyvernAtomicizer',() => {
  it('should be deployed',async () => {
    const atomicizer =  await wyvernAtomicizer.deployed()
    console.log("[WyvernAtomicizerWyvernAtomicizer] xx ---->1")
    return atomicizer
  })
}) 


/*
describe("WyvernAtomicizer", function() {
  it("should be deployed", async function() {

    const Atomicizer = await ethers.getContractFactory("WyvernAtomicizer");

    const hardhatToken = await Atomicizer.deploy();

    console.log("[Atomicizer] ", hardhatToken);
 
  });
});*/