/* global artifacts:false, it:false, contract:false, assert:false */
 
const wyvernAtomicizer = artifacts.require('WyvernAtomicizer')
const wyvernStatic = artifacts.require('WyvernStatic')

contract('WyvernStatic',() => {
  it('is deployed',async () => {
    return await wyvernStatic.deployed();
  })

  it('has the correct atomicizer address',async () => {
    let [atomicizerInstance,staticInstance] = await Promise.all([wyvernAtomicizer.deployed(),wyvernStatic.deployed()])
    assert.equal(await staticInstance.atomicizer(),atomicizerInstance.address,'incorrect atomicizer address')
  })
}) 

/*
const { expect } = require("chai");

describe("WyvernStatic", function() {

  it("is deployed", async () => {
    const WyvernStatic = await ethers.getContractFactory("WyvernStatic");

    return await WyvernStatic.deploy();
  });

  it('has the correct atomicizer address',async () => {
    const WyvernStatic = await ethers.getContractFactory("WyvernStatic");
    const WyvernAtomicizer = await ethers.getContractFactory("WyvernAtomicizer");

    let [atomicizerInstance,staticInstance] = await Promise.all([WyvernAtomicizer.deploy(),WyvernStatic.deploy()])
    expect(await staticInstance.atomicizer()).to.equal(atomicizerInstance.address);
  })
});

*/