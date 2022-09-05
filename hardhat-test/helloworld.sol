// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract HelloWorld {

  string message;

  constructor() {
    message = "Hello world!";
  }
  
  function setMessage(string memory _message) public {
    message = _message;
  }
  
  function getMessage() public view returns(string memory) {
    return message;
  }
}

