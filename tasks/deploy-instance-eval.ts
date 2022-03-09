import { Contract } from "ethers"
import { task, types } from "hardhat/config"

task("deploy:ieval", "Deploy a InstanceEval contract")
  .addOptionalParam<boolean>("logs", "Print the logs", true, types.boolean)
  .setAction(async ({ logs }, { ethers }): Promise<Contract> => {
    const BN254LibFactory = await ethers.getContractFactory("BN254")
    const bn254Lib = await BN254LibFactory.deploy()
    await bn254Lib.deployed()

    const InstanceEvalFactory = await ethers.getContractFactory("InstanceEval", {
      libraries: {
        BN254: bn254Lib.address,
      }
    })

    const contract = await InstanceEvalFactory.deploy()

    await contract.deployed()

    logs && console.log(`InstanceEval contract has been deployed to: ${contract.address}`)

    return contract
  })
