//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./BN254.sol";

contract Constants {
    using BN254 for *;
    uint256[][] G_LAGRANGE = [
      [uint256(0x0264297035882ea39c8067ffc356ee80a099f865f4953cffce1057568091ec41),
        uint256(0x1dd968b1c38723cbae56c853a988778e9fe66580ea898b702b548069d20fda93)
      ]
      // [uint256(0x0cc24603104c6dc057ab0b3165c95f512a6576cf5ed2731fb90d9e3a9636fc1b),
      //   uint256(0x2ea6495eb7d3e1ef33d7da2643a306738086361a638d61be9286b35d8c85ea1a)
      // ],
      // [uint256(0x0cc24603104c6dc057ab0b3165c95f512a6576cf5ed2731fb90d9e3a9636fc1b),
      //   uint256(0x2ea6495eb7d3e1ef33d7da2643a306738086361a638d61be9286b35d8c85ea1a)
      // ],
      // [uint256(0x0cc24603104c6dc057ab0b3165c95f512a6576cf5ed2731fb90d9e3a9636fc1b),
      //   uint256(0x2ea6495eb7d3e1ef33d7da2643a306738086361a638d61be9286b35d8c85ea1a)
      // ]
    ];
}
