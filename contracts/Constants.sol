//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./BN254.sol";

contract Constants {
    using BN254 for *;
    uint256[][] G_LAGRANGE = [
      [uint256(0x1bf32ccf9d8606f2a32624586c10380aa3d12ecd1f0b53f277df6e74c2f8652e),
        uint256(0x2d5cba37de100449b4a704cf146a4e1fa4e35a775b0978dac606af22ee086c14)
      ],
      [uint256(0x0e401b101716cb5ef95e29e150c1829a179e9d89167205f23593fb8161d085e8),
        uint256(0x1d1766d6eb8ad6899aa76215fbc72c7c815cdf4fa5b94824b214d33a81441647)
      ],
      [uint256(0x22f09c6d02082455b418cabcaed2f8113ffcba593c346f30d07236308baf24c9),
        uint256(0x3047fa8d988dd0ffb58a3d397c05febc29adc880fa1740d4ba37392593eab87d)
      ]
    ];
}
