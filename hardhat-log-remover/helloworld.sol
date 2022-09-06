// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract HelloWorld {

  string message;

  constructor() {
    message = "Hello world!";
  }

  function setMessage(string memory _message) public {
    message = _message;
    console.log("setMessage called");
  }

  function getMessage() public view returns(string memory) {
    console.log("getMessage called");
    return message;
  }
}

