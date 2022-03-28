//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import {Constants} from "../Constants.sol";
// import {BN254} from "../BN254.sol";

// import "hardhat/console.sol";

// abstract contract Table is Constants {
//   using BN254 for *;

//   struct Commitment {
//     uint256 x;
//     uint256 y;
//   }

//   // because every column will be commited to it makes sense to store table as transposed matrix
//   uint256[][] public table;

//   function construct() public virtual;

//   function commit() public view returns (Commitment[] memory _columnCommitments) {
//     Commitment[] memory columnCommitments = new Commitment[](table.length);
//     for (uint256 i = 0; i < table.length; i++) {
//       (uint256 x, uint256 y) = BN254.multiScalarMul(G_LAGRANGE, table[i]);
//       columnCommitments[i] = Commitment(x, y);
//     }

//     return columnCommitments;
//   }
// }
