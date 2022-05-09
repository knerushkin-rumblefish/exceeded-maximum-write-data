import { ethers } from 'hardhat'
import { constants } from 'ethers'


export const SECOND = 1
export const MINUTE = SECOND * 60
export const HOUR = MINUTE * 60
export const DAY = HOUR * 24
export const WEEK = DAY * 7
export const MONTH = DAY * 30

export async function deployAuthorizer() {
  try {
    const AuthorizerFactory = await ethers.getContractFactory("Authorizer")
    const authorizer = await AuthorizerFactory.deploy("0xbB91644F26b075bda47a13682DAD006eb9d70867", { gasLimit: 12000000 })
    console.log('Authorizer', authorizer.address)

    const VaultFactory = await ethers.getContractFactory("Vault")
    const vault = await VaultFactory.deploy(authorizer, constants.AddressZero, 3 * MONTH, MONTH, { gasLimit: 12000000 })
    console.log('Vault', vault.address)
  } catch(error) {
    console.error(error)
  }
}

deployAuthorizer()