// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract GameTokens is ERC1155 {

    constructor(string memory uri) ERC1155(uri) {
       
    }

    function mint(address owner, uint256 tokenId, uint256 amount) public
    {
        _mint(owner, tokenId, amount, "");
    } 

    function mintForCaller(uint256 tokenId, uint256 amount) public
    {
        _mint(msg.sender, tokenId, amount, "");
    } 
}
