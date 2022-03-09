import { expect } from "chai"
import { ethers, run } from "hardhat"

describe("MSM", function () {
  it("Should properly calculate msm result", async function () {
    const BN254LibFactory = await ethers.getContractFactory("BN254")
    const bn254Lib = await BN254LibFactory.deploy()
    await bn254Lib.deployed()

    const InstanceEvalFactory = await ethers.getContractFactory("InstanceEval", {
      libraries: {
        BN254: bn254Lib.address,
      }
    })

    const instanceEval = await InstanceEvalFactory.deploy()

    await instanceEval.deployed()

    const scalars = ["0xfc", "0xfc"];

    const {x, y} = await instanceEval.evalAtOmegaLagrange(scalars);
    console.log(x, y);
  });
});
