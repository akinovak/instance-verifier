// //SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import {Constants} from "./Constants.sol";
import {BN254} from "./BN254.sol";

contract InstanceVerifier is Constants {
    using BN254 for *;
    function evalAtOmegaLagrange(uint256[] memory _scalars)
    private
    view
    returns (uint256 x, uint256 y)
    {
      return BN254.multiScalarMul(G_LAGRANGE, _scalars);
    }

	function verifyInstance(uint256[] memory _instance, uint256 commitX, uint256 commitY)
    public
    view
    returns(bool)
  {
    (uint256 x, uint256 y) = evalAtOmegaLagrange(_instance);
    return (x == commitX && y == commitY);
  }
}
