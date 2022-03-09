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

    const scalars = ["0x1", "0x2", "0x3"];

    const res = await instanceEval.eval_at_g_lagrange(scalars);


    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
