const { expect } = require("chai");

describe("Token contract", function() {
  it("Deployment should assign the total supply of tokens to the owner", async function() {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("TestERC20");

    const hardhatToken = await Token.deploy();

    const ok = await hardhatToken.mint(owner.address, 1000);
    console.log("[TestERC20] mint(address to, uint256 value) is", ok);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    console.log("[TestERC20] ownerBalance", ownerBalance.value);

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});