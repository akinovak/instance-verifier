//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./BN254.sol";

contract Constants {
	using BN254 for *;

	uint256[][] G_LAGRANGE = [
		[
			uint256(0x0834d40cafb7353117ab991ca2fb87363b4a5cf9242905a71afd8b57ee4cb5f5),
			uint256(0x25fbfb6e5fd7098cef968d365e9b89275e47028bd3ad388858cfe54fc3f2dc4b)
		],
		[
			uint256(0x23096ce89de17dd4bf9b1f245657dff117562daf39deb3e2504c92f7be8d0234),
			uint256(0x0a3d02595288a0587fe9bd20007ccb93457afa45a2d048e5a863676275e0d770)
		],
		[
			uint256(0x1d27c44732d81880f525a07b876df3817a84d8b8e044487c28e2c084ffad30b0),
			uint256(0x08e0d77f2a8c03f58a0ca6570731d9f37dc6bcaedb08a501c1adff775344e159)
		]
	];
}
