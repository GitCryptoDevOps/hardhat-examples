const { expect } = require("chai");
const { ethers } = require("hardhat");

it("Should return the new message once changed", async function () {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloworld = await HelloWorld.deploy();
  const gas = await GetGas(await helloworld.setMessage("Bonjour le monde !"));
  console.log('Gas used: ' + gas);
  expect(await helloworld.getMessage()).to.equal("Bonjour le monde !");
});

