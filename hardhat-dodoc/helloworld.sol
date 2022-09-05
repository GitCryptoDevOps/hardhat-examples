// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/// @title The title
/// @author The author
/// @notice The comments for the end-users
/// @dev The comments for the devs
contract MyContract {

  /// @notice The second comments for the end-users
  /// @dev The second comments for the devs
  /// @param myvalue The comments for the arguments of the function
  /// @return The comments for the return of the function
  function myFunction(uint256 myvalue) external virtual pure returns (uint256) {
   return myvalue;
  }
}

