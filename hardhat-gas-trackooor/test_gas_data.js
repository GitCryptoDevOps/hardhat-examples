const { expect } = require("chai");
const { ethers } = require("hardhat");

it("Should return the new message once changed", async function () {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloworld = new GasTracker(await HelloWorld.deploy(), {
   logAfterTx: false,
  })
  await helloworld.setMessage("Bonjour le monde !");
  expect(await helloworld.getMessage()).to.equal("Bonjour le monde !");
  const gasData = helloworld.gasData;
  console.log(gasData);
});

