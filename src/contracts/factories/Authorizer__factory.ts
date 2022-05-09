/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Authorizer, AuthorizerInterface } from "../Authorizer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "actionId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canPerform",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "grantRolesToMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roles",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "revokeRolesFromMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610c60380380610c608339818101604052602081101561003357600080fd5b5051610040600082610046565b5061013d565b6100508282610054565b5050565b6000828152602081815260409091206100769183906107e36100b7821b17901c565b156100505760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60006100c3838361011c565b61011257508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b03861690811790915585549082528286019093526040902091909155610116565b5060005b92915050565b6001600160a01b031660009081526001919091016020526040902054151590565b610b148061014c6000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806318b2cde9146100b4578063248a9ca3146101d95780632f2ff15d1461020857806336568abe146102345780639010d07c1461026057806391d148541461029f578063988360a3146102df5780639be2a8841461038b578063a217fddf146103bf578063a73cb2ab146103c7578063ca15c873146104ea578063d547741f14610507578063fcd7627e14610533575b600080fd5b6101d7600480360360408110156100ca57600080fd5b810190602081018135600160201b8111156100e457600080fd5b8201836020820111156100f657600080fd5b803590602001918460208302840111600160201b8311171561011757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561016657600080fd5b82018360208201111561017857600080fd5b803590602001918460208302840111600160201b8311171561019957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506105df945050505050565b005b6101f6600480360360208110156101ef57600080fd5b5035610634565b60408051918252519081900360200190f35b6101d76004803603604081101561021e57600080fd5b50803590602001356001600160a01b0316610649565b6101d76004803603604081101561024a57600080fd5b50803590602001356001600160a01b031661067f565b6102836004803603604081101561027657600080fd5b50803590602001356106a0565b604080516001600160a01b039092168252519081900360200190f35b6102cb600480360360408110156102b557600080fd5b50803590602001356001600160a01b03166106c1565b604080519115158252519081900360200190f35b6101d7600480360360408110156102f557600080fd5b810190602081018135600160201b81111561030f57600080fd5b82018360208201111561032157600080fd5b803590602001918460208302840111600160201b8311171561034257600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b031691506106d99050565b6102cb600480360360608110156103a157600080fd5b508035906001600160a01b036020820135811691604001351661070a565b6101f661071e565b6101d7600480360360408110156103dd57600080fd5b810190602081018135600160201b8111156103f757600080fd5b82018360208201111561040957600080fd5b803590602001918460208302840111600160201b8311171561042a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561047957600080fd5b82018360208201111561048b57600080fd5b803590602001918460208302840111600160201b831117156104ac57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610723945050505050565b6101f66004803603602081101561050057600080fd5b5035610773565b6101d76004803603604081101561051d57600080fd5b50803590602001356001600160a01b031661078a565b6101d76004803603604081101561054957600080fd5b810190602081018135600160201b81111561056357600080fd5b82018360208201111561057557600080fd5b803590602001918460208302840111600160201b8311171561059657600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550505090356001600160a01b031691506107b29050565b6105eb82518251610846565b60005b825181101561062f5761062783828151811061060657fe5b602002602001015183838151811061061a57fe5b602002602001015161078a565b6001016105ee565b505050565b60009081526020819052604090206002015490565b6000828152602081905260409020600201546106719061066990336106c1565b6101a661084f565b61067b828261085d565b5050565b6106966001600160a01b03821633146101a861084f565b61067b82826108b6565b60008281526020819052604081206106b8908361090f565b90505b92915050565b60008281526020819052604081206106b8908361092b565b60005b825181101561062f576107028382815181106106f457fe5b60200260200101518361078a565b6001016106dc565b600061071684846106c1565b949350505050565b600081565b61072f82518251610846565b60005b825181101561062f5761076b83828151811061074a57fe5b602002602001015183838151811061075e57fe5b6020026020010151610649565b600101610732565b60008181526020819052604081206106bb9061094c565b600082815260208190526040902060020154610696906107aa90336106c1565b6101a761084f565b60005b825181101561062f576107db8382815181106107cd57fe5b602002602001015183610649565b6001016107b5565b60006107ef838361092b565b61083e57508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b038616908117909155855490825282860190935260409020919091556106bb565b5060006106bb565b61067b81831460675b8161067b5761067b81610950565b600082815260208190526040902061087590826107e3565b1561067b5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526020819052604090206108ce90826109a3565b1561067b5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b8154600090610921908310606461084f565b6106b88383610ab1565b6001600160a01b031660009081526001919091016020526040902054151590565b5490565b62461bcd60e51b6000908152602060045260076024526642414c23000030600a808404818106603090810160081b95839006959095019082900491820690940160101b939093010160c81b604452606490fd5b6001600160a01b03811660009081526001830160205260408120548015610aa75783546000198083019101808214610a4f5760008660000182815481106109e657fe5b60009182526020909120015487546001600160a01b0390911691508190889085908110610a0f57fe5b600091825260208083209190910180546001600160a01b0319166001600160a01b0394851617905592909116815260018881019092526040902090830190555b8554869080610a5a57fe5b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b03871682526001888101909152604082209190915593506106bb92505050565b60009150506106bb565b6000826000018281548110610ac257fe5b6000918252602090912001546001600160a01b0316939250505056fea2646970667358221220f72b4a4a710eec64c354a2b74f223ddaad3f920fe776e7465a4bb68bcfec00ea64736f6c63430007010033";

export class Authorizer__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Authorizer> {
    return super.deploy(admin, overrides || {}) as Promise<Authorizer>;
  }
  getDeployTransaction(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {});
  }
  attach(address: string): Authorizer {
    return super.attach(address) as Authorizer;
  }
  connect(signer: Signer): Authorizer__factory {
    return super.connect(signer) as Authorizer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthorizerInterface {
    return new utils.Interface(_abi) as AuthorizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authorizer {
    return new Contract(address, _abi, signerOrProvider) as Authorizer;
  }
}
