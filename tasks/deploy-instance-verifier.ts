import { Contract } from "ethers"
import { task, types } from "hardhat/config"

task("deploy:verifier", "Deploy a InstanceVerifier contract")
  .addOptionalParam<boolean>("logs", "Print the logs", true, types.boolean)
  .setAction(async ({ logs }, { ethers }): Promise<Contract> => {
    const BN254LibFactory = await ethers.getContractFactory("BN254")
    const bn254Lib = await BN254LibFactory.deploy()
    await bn254Lib.deployed()

    const InstanceVerifierFactory = await ethers.getContractFactory("InstanceVerifier", {
      libraries: {
        BN254: bn254Lib.address
      }
    })

    const contract = await InstanceVerifierFactory.deploy()

    await contract.deployed()

    logs && console.log(`InstanceVerifier contract has been deployed to: ${contract.address}`)

    return contract
  })
