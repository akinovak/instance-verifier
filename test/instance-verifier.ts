import { expect } from "chai"
import { ethers, run } from "hardhat"
import { Contract } from "ethers"

describe("InstanceVerifier", () => {
  let contract: Contract
  before(async () => {
    contract = await run("deploy:verifier", { logs: false })
  })

  it("Should properly calculate msm result", async function () {
    // p_i: [0x2453c9a94755c11483912d74ca8d13df7f17712226a6ed6802858cf7b04a3b61, 0x27f3028a13d68f61f962caad65a127bdc5c5154eabac22046814ed3e584491dd, 0x1a0493f2a37fadac8d93f3e93826409dbc31aa2b6c707a9e8a32b0e94f4409cc]
    // instance_commitment: Ok((0x0d875c75ac7ad0114459a3c4b2eea1be7e4bdc483fe3a55b1c8d279a506491c5, 0x15317bb6751d7e53a0a1751e54053e1b2aa25cd021a4289fd8394df90e3c5f87))
    const instance = ["0x2453c9a94755c11483912d74ca8d13df7f17712226a6ed6802858cf7b04a3b61", "0x27f3028a13d68f61f962caad65a127bdc5c5154eabac22046814ed3e584491dd", "0x1a0493f2a37fadac8d93f3e93826409dbc31aa2b6c707a9e8a32b0e94f4409cc"]
    const commitment = [
      "0x0d875c75ac7ad0114459a3c4b2eea1be7e4bdc483fe3a55b1c8d279a506491c5",
      "0x15317bb6751d7e53a0a1751e54053e1b2aa25cd021a4289fd8394df90e3c5f87"
    ]

    const commitmentCheck = await contract.verifyInstance(instance, commitment[0], commitment[1])
    expect(commitmentCheck).to.be.true
  })
})
