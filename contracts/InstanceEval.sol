// //SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import {Constants} from "./Constants.sol";
import {BN254} from "./BN254.sol";

contract InstanceEval is Constants {
  using BN254 for *;
  function evalAtOmegaLagrange(uint256[] memory _scalars)
  public
  view
  returns (uint256 x, uint256 y)
  {
    return BN254.multiScalarMul(G_LAGRANGE, _scalars);
  }
}
