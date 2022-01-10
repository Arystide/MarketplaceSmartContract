/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTTrader, NFTTraderInterface } from "../NFTTrader";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct NFT_Trader.Listing",
        name: "_listing",
        type: "tuple",
      },
    ],
    name: "listingAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct NFT_Trader.Listing",
        name: "_listing",
        type: "tuple",
      },
    ],
    name: "listingRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct NFT_Trader.Listing",
        name: "item",
        type: "tuple",
      },
    ],
    name: "purchaseDone",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "GetListings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "price",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "seller",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct NFT_Trader.Listing[]",
            name: "listings",
            type: "tuple[]",
          },
        ],
        internalType: "struct NFT_Trader.ListingByToken[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "RemoveListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "addListing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "listings",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "destAddress",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612626806100206000396000f3fe6080604052600436106100705760003560e01c80636f1991d91161004e5780636f1991d91461010b578063744bfe61146101345780637d3b48ea1461015d57806380abbe571461019c57610070565b8063013e78331461007557806327e235e3146100b257806340deef29146100ef575b600080fd5b34801561008157600080fd5b5061009c60048036038101906100979190611b3c565b6101c5565b6040516100a99190612102565b60405180910390f35b3480156100be57600080fd5b506100d960048036038101906100d49190611b3c565b6107cb565b6040516100e691906121ff565b60405180910390f35b61010960048036038101906101049190611bf0565b6107e3565b005b34801561011757600080fd5b50610132600480360381019061012d9190611b65565b610a27565b005b34801561014057600080fd5b5061015b60048036038101906101569190611ca5565b610c08565b005b34801561016957600080fd5b50610184600480360381019061017f9190611ba1565b610d2b565b6040516101939392919061221a565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be9190611ce1565b610d9f565b005b60606000829050600060018054905067ffffffffffffffff811115610213577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561024c57816020015b610239611a82565b8152602001906001900390816102315790505b50905060005b6001805490508110156107c05760005b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600184815481106102dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001548152602001908152602001600020805490508110156105bd578373ffffffffffffffffffffffffffffffffffffffff1662fdd58e6000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060018681548110610395577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154815260200190815260200160002083815481106103e6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660018581548110610452577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001546040518363ffffffff1660e01b815260040161047a9291906120d9565b60206040518083038186803b15801561049257600080fd5b505afa1580156104a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ca9190611c7c565b6000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600060018581548110610544577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015481526020019081526020016000208281548110610595577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600302016002018190555080806105b590612423565b915050610262565b50604051806040016040528060018381548110610603577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015481526020016000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006001858154811061068d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001548152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156107625783829060005260206000209060030201604051806060016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481525050815260200190600101906106c6565b505050508152508282815181106107a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525080806107b890612423565b915050610252565b508092505050919050565b60026020528060005260406000206000915090505481565b600084905060006107f5868487610f82565b9050838160000151610807919061233b565b341015610849576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610840906121c4565b60405180910390fd5b838273ffffffffffffffffffffffffffffffffffffffff1662fdd58e85886040518363ffffffff1660e01b81526004016108849291906120d9565b60206040518083038186803b15801561089c57600080fd5b505afa1580156108b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d49190611c7c565b1015610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090c90612184565b60405180910390fd5b3460026000836020015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461096891906122e5565b925050819055508173ffffffffffffffffffffffffffffffffffffffff1663f242432a82602001513388886040518563ffffffff1660e01b81526004016109b29493929190612081565b600060405180830381600087803b1580156109cc57600080fd5b505af11580156109e0573d6000803e3d6000fd5b505050507faf84f4510a23940bf1abbcf34cb1ea8f5db0c96d145609fff34def4c5796538d833383604051610a179392919061204a565b60405180910390a1505050505050565b600082905060008173ffffffffffffffffffffffffffffffffffffffff1662fdd58e33856040518363ffffffff1660e01b8152600401610a689291906120d9565b60206040518083038186803b158015610a8057600080fd5b505afa158015610a94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab89190611c7c565b11610af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aef90612124565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610b33929190612021565b60206040518083038186803b158015610b4b57600080fd5b505afa158015610b5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b839190611c53565b610bc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb990612144565b60405180910390fd5b7fc64cb2f852941d7bdcc5bb979612f8bae1ab50bbbbbd25a3975b0c3418742a39610bee8433856112f1565b604051610bfb91906121e4565b60405180910390a1505050565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115610c8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8190612164565b60405180910390fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cd99190612395565b925050819055508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610d26573d6000803e3d6000fd5b505050565b60006020528260005260406000206020528160005260406000208181548110610d5357600080fd5b906000526020600020906003020160009250925050508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b600082905060008173ffffffffffffffffffffffffffffffffffffffff1662fdd58e33856040518363ffffffff1660e01b8152600401610de09291906120d9565b60206040518083038186803b158015610df857600080fd5b505afa158015610e0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e309190611c7c565b11610e70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6790612124565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663e985e9c533306040518363ffffffff1660e01b8152600401610eab929190612021565b60206040518083038186803b158015610ec357600080fd5b505afa158015610ed7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610efb9190611c53565b610f3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3190612144565b60405180910390fd5b7f98f736868d2fa2fb3e293f1150fba67f563f52c0b19fc2be6cadc0eb3599f64e610f678433858861152d565b604051610f7491906121e4565b60405180910390a150505050565b610f8a611a9c565b6000610f94611a9c565b60008060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002080549050905060005b8181101561120a578673ffffffffffffffffffffffffffffffffffffffff166000808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008881526020019081526020016000208281548110611094577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156111f757600193506000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000878152602001908152602001600020818154811061116d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201604051806060016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481525050925061120a565b808061120290612423565b915050610fee565b508261124b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611242906121a4565b60405180910390fd5b60008790508073ffffffffffffffffffffffffffffffffffffffff1662fdd58e88886040518363ffffffff1660e01b815260040161128a9291906120d9565b60206040518083038186803b1580156112a257600080fd5b505afa1580156112b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112da9190611c7c565b836040018181525050829450505050509392505050565b6112f9611a9c565b60008060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002080549050905060005b81811015611523578473ffffffffffffffffffffffffffffffffffffffff166000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600086815260200190815260200160002082815481106113f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156115105760008060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000208054905014156114af576114ad6001826116d2565b505b6115076000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000208261180d565b92505050611526565b808061151b90612423565b915050611353565b50505b9392505050565b611535611a9c565b600060405180606001604052808481526020018673ffffffffffffffffffffffffffffffffffffffff168152602001600081525090506000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008581526020019081526020016000208190806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155505060016000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000208054905014156116c65760018490806001815401808255809150506001900390600052602060002001600090919091909150555b80915050949350505050565b60008083838154811061170e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050836001858054905061172d9190612395565b81548110611764577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001548484815481106117a8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200181905550838054806117ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558091505092915050565b611815611a9c565b6000838381548110611850577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201604051806060016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481525050905083600185805490506118e79190612395565b8154811061191e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201848481548110611965577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002820154816002015590505083805480611a28577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60019003818190600052602060002090600302016000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160009055505090558091505092915050565b604051806040016040528060008152602001606081525090565b604051806060016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b600081359050611ae281612594565b92915050565b600081359050611af7816125ab565b92915050565b600081519050611b0c816125c2565b92915050565b600081359050611b21816125d9565b92915050565b600081519050611b36816125d9565b92915050565b600060208284031215611b4e57600080fd5b6000611b5c84828501611ad3565b91505092915050565b60008060408385031215611b7857600080fd5b6000611b8685828601611ad3565b9250506020611b9785828601611b12565b9150509250929050565b600080600060608486031215611bb657600080fd5b6000611bc486828701611ad3565b9350506020611bd586828701611b12565b9250506040611be686828701611b12565b9150509250925092565b60008060008060808587031215611c0657600080fd5b6000611c1487828801611ad3565b9450506020611c2587828801611b12565b9350506040611c3687828801611b12565b9250506060611c4787828801611ad3565b91505092959194509250565b600060208284031215611c6557600080fd5b6000611c7384828501611afd565b91505092915050565b600060208284031215611c8e57600080fd5b6000611c9c84828501611b27565b91505092915050565b60008060408385031215611cb857600080fd5b6000611cc685828601611b12565b9250506020611cd785828601611ae8565b9150509250929050565b600080600060608486031215611cf657600080fd5b6000611d0486828701611b12565b9350506020611d1586828701611ad3565b9250506040611d2686828701611b12565b9150509250925092565b6000611d3c8383611f42565b905092915050565b6000611d508383611f7f565b60608301905092915050565b611d65816123c9565b82525050565b611d74816123c9565b82525050565b6000611d8582612271565b611d8f81856122a1565b935083602082028501611da185612251565b8060005b85811015611ddd5784840389528151611dbe8582611d30565b9450611dc983612287565b925060208a01995050600181019050611da5565b50829750879550505050505092915050565b6000611dfa8261227c565b611e0481856122b2565b9350611e0f83612261565b8060005b83811015611e40578151611e278882611d44565b9750611e3283612294565b925050600181019050611e13565b5085935050505092915050565b6000611e5a601b836122d4565b9150611e658261249b565b602082019050919050565b6000611e7d6019836122d4565b9150611e88826124c4565b602082019050919050565b6000611ea06012836122d4565b9150611eab826124ed565b602082019050919050565b6000611ec36020836122d4565b9150611ece82612516565b602082019050919050565b6000611ee66018836122d4565b9150611ef18261253f565b602082019050919050565b6000611f096000836122c3565b9150611f1482612568565b600082019050919050565b6000611f2c6017836122d4565b9150611f378261256b565b602082019050919050565b6000604083016000830151611f5a6000860182612003565b5060208301518482036020860152611f728282611def565b9150508091505092915050565b606082016000820151611f956000850182612003565b506020820151611fa86020850182611d5c565b506040820151611fbb6040850182612003565b50505050565b606082016000820151611fd76000850182612003565b506020820151611fea6020850182611d5c565b506040820151611ffd6040850182612003565b50505050565b61200c81612419565b82525050565b61201b81612419565b82525050565b60006040820190506120366000830185611d6b565b6120436020830184611d6b565b9392505050565b600060a08201905061205f6000830186611d6b565b61206c6020830185611d6b565b6120796040830184611fc1565b949350505050565b600060a0820190506120966000830187611d6b565b6120a36020830186611d6b565b6120b06040830185612012565b6120bd6060830184612012565b81810360808301526120ce81611efc565b905095945050505050565b60006040820190506120ee6000830185611d6b565b6120fb6020830184612012565b9392505050565b6000602082019050818103600083015261211c8184611d7a565b905092915050565b6000602082019050818103600083015261213d81611e4d565b9050919050565b6000602082019050818103600083015261215d81611e70565b9050919050565b6000602082019050818103600083015261217d81611e93565b9050919050565b6000602082019050818103600083015261219d81611eb6565b9050919050565b600060208201905081810360008301526121bd81611ed9565b9050919050565b600060208201905081810360008301526121dd81611f1f565b9050919050565b60006060820190506121f96000830184611fc1565b92915050565b60006020820190506122146000830184612012565b92915050565b600060608201905061222f6000830186612012565b61223c6020830185611d6b565b6122496040830184612012565b949350505050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006122f082612419565b91506122fb83612419565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156123305761232f61246c565b5b828201905092915050565b600061234682612419565b915061235183612419565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561238a5761238961246c565b5b828202905092915050565b60006123a082612419565b91506123ab83612419565b9250828210156123be576123bd61246c565b5b828203905092915050565b60006123d4826123f9565b9050919050565b60006123e6826123f9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061242e82612419565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156124615761246061246c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f43616c6c6572206d757374206f776e20676976656e20746f6b656e0000000000600082015250565b7f436f6e7472616374206d75737420626520617070726f76656400000000000000600082015250565b7f496e73756666696369656e742066756e64730000000000000000000000000000600082015250565b7f53656c6c6572206e6f206c6f6e67657220686173207468697320616d6f756e74600082015250565b7f476976656e206974656d20776173206e6f7420666f756e640000000000000000600082015250565b50565b7f496e73756666696369656e742066756e64732073656e74000000000000000000600082015250565b61259d816123c9565b81146125a857600080fd5b50565b6125b4816123db565b81146125bf57600080fd5b50565b6125cb816123ed565b81146125d657600080fd5b50565b6125e281612419565b81146125ed57600080fd5b5056fea264697066735822122094d71cf87584f58d11ff9f4f3631bc7cf33e70b34b6bb4283cea4fcdb30bad9e64736f6c63430008030033";

type NFTTraderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTTraderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTTrader__factory extends ContractFactory {
  constructor(...args: NFTTraderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTTrader> {
    return super.deploy(overrides || {}) as Promise<NFTTrader>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTTrader {
    return super.attach(address) as NFTTrader;
  }
  connect(signer: Signer): NFTTrader__factory {
    return super.connect(signer) as NFTTrader__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTTraderInterface {
    return new utils.Interface(_abi) as NFTTraderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTTrader {
    return new Contract(address, _abi, signerOrProvider) as NFTTrader;
  }
}