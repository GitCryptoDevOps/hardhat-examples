// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HelloWorld {

  string message;

  constructor() {
    message = "Hello world!";
  }

  function helloWorld() public view returns(string memory) {
    return message;
  }
}

