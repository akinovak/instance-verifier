//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

//POTENTIAL IMPLEMENTATION OF BLOCK TABLE
// import {Table} from "./Table.sol";

// contract BlockTable is Table {
//   constructor(uint256 nColumns, uint256 nRows) {
//     table = new uint256[][](nColumns);
//     for (uint256 i = 0; i < nColumns; i++) {
//       table[i] = new uint256[](nRows);
//     }

//     construct();
//   }

//   function construct() public override {
//     table[0] = [
//       uint256(bytes32("Coinbase")),
//       uint256(bytes32("GasLimit")),
//       uint256(bytes32("BlockNumber")),
//       uint256(bytes32("Time")),
//       uint256(bytes32("Difficulty")),
//       uint256(bytes32("BaseFee"))
//     ];
//     // if block.number < 256 {

//     // }
//     ///
//   }
// }
