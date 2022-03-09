import { Contract } from "ethers"
import { task, types } from "hardhat/config"

task("deploy:greeter", "Deploy a Greeter contract")
  .addOptionalParam<boolean>("logs", "Print the logs", true, types.boolean)
  .setAction(async ({ logs }, { ethers }): Promise<Contract> => {
    const ContractFactory = await ethers.getContractFactory("Greeter")

    const contract = await ContractFactory.deploy("hello")

    await contract.deployed()

    logs && console.log(`Greeter contract has been deployed to: ${contract.address}`)

    return contract
  })
