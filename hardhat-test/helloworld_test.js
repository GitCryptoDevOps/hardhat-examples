const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function () {
  it("Should return the new message once changed", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloworld = await HelloWorld.deploy();
    await helloworld.deployed();
    expect(await helloworld.getMessage()).to.equal("Hello world!");
    const setMessageTx = await helloworld.setMessage("Bonjour monde !");
    await setMessageTx.wait();
    expect(await helloworld.getMessage()).to.equal("Bonjour monde !");
  });
});

