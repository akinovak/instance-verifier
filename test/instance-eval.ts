import { expect } from "chai"
import { ethers, run } from "hardhat"
import { Contract } from "ethers";

describe("MSM", () => {
  let contract: Contract;
  before(async () => {
    // const { address: verifierAddress } = await run("deploy:verifier", { logs: false })
    // contract = await run("deploy:semaphore-voting", { logs: false, verifier: verifierAddress })
    // accounts = await ethers.getSigners()
    // coordinator = await accounts[1].getAddress()
    contract = await run("deploy:ieval", { logs: false })
    // const BN254LibFactory = await ethers.getContractFactory("BN254")
    // const bn254Lib = await BN254LibFactory.deploy()
    // await bn254Lib.deployed()
  })

  it("Should properly calculate msm result", async function () {
    const scalars = ["0xfc"];

    const {x, y} = await contract.evalAtOmegaLagrange(scalars);
    // BigNumber { value: "16252154346109855224230955701219293761017024142479962933205183441609751873582" } BigNumber { value: "71209327064833399729668004637328255039959823027976608048259093432245387662" }
    await expect(x).to.be.eq("16252154346109855224230955701219293761017024142479962933205183441609751873582")
    await expect(y).to.be.eq("71209327064833399729668004637328255039959823027976608048259093432245387662")

    console.log(x, y);
  });
});
