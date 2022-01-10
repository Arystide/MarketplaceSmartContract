// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";


contract NFT_Trader {
    mapping(address => mapping(uint256 => Listing[])) public listings;
    uint256[] tokenIds;
        uint256 constant arrLength = 5;
    mapping(address => uint256) public balances;

    struct Listing{
        uint256 price;
        address seller;
        uint256 amount;
    }

    struct ListingByToken{
        uint256 tokenId;
        Listing[] listings;
    }

    event listingAdded(Listing _listing);
    event listingRemoved(Listing _listing);
    event purchaseDone(address seller, address buyer, Listing item);
    
    function addListing(uint256 price, address contractAddr, uint256 tokenId) public {
        ERC1155 token = ERC1155(contractAddr);
        require(token.balanceOf(msg.sender, tokenId) > 0, "Caller must own given token");
        require(token.isApprovedForAll(msg.sender, address(this)), "Contract must be approved");

        emit listingAdded(addListing(contractAddr, msg.sender, tokenId, price));
    }

    function RemoveListing(address contractAddr, uint256 tokenId) public {
        ERC1155 token = ERC1155(contractAddr);
        require(token.balanceOf(msg.sender, tokenId) > 0, "Caller must own given token");
        require(token.isApprovedForAll(msg.sender, address(this)), "Contract must be approved");
        
        emit listingRemoved(removeListing(contractAddr, msg.sender, tokenId));
    }      

    function purchase(address contractAddr, uint256 tokenId, uint256 amount, address seller) public payable {
        ERC1155 token = ERC1155(contractAddr);
        Listing memory item = GetListing(contractAddr, seller, tokenId);
        require(msg.value >= item.price * amount, "Insufficient funds sent");
        require(token.balanceOf(seller, tokenId) >= amount, "Seller no longer has this amount");

        balances[item.seller] += msg.value;
        token.safeTransferFrom(item.seller, msg.sender, tokenId, amount, "");

        emit purchaseDone(seller, msg.sender, item);
    }

    function withdrawFunds(uint256 amount, address payable destAddress) public {
        require(amount <= balances[msg.sender], "Insufficient funds");

        balances[msg.sender] -= amount;
        destAddress.transfer(amount);
    }

    //*********************************
    // Getters
    //*********************************
    function GetListing(address contractAddr,  address seller, uint256 tokenId) private view returns (Listing memory)
    {
        bool itemFound = false;
        Listing memory item;
        uint256 _lCount = listings[contractAddr][tokenId].length;
        for(uint256 i = 0; i < _lCount; i++)
        {
            if(listings[contractAddr][tokenId][i].seller == seller)
            {
                itemFound = true;
                item = listings[contractAddr][tokenId][i];
                break;
            }
        }

        require(itemFound, "Given item was not found");
        ERC1155 token = ERC1155(contractAddr);
        item.amount = token.balanceOf(seller, tokenId);
        return item;
    }

    function GetListings(address contractAddr) public returns(ListingByToken[] memory)
    {
        ERC1155 token = ERC1155(contractAddr);
        ListingByToken[] memory result = new ListingByToken[](tokenIds.length);

        for (uint256 i = 0; i < tokenIds.length; i++) {
            for(uint256 j = 0; j < listings[contractAddr][tokenIds[i]].length; j++){
                listings[contractAddr][tokenIds[i]][j].amount = 
                    token.balanceOf(listings[contractAddr][tokenIds[i]][j].seller, tokenIds[i]);     
            }
            
            result[i] = ListingByToken(
                                        tokenIds[i], 
                                        listings[contractAddr][tokenIds[i]]
                                    );
        }
        return result;
    } 

    //*********************************
    // Utils
    //*********************************

    function addListing(address contractAddr,  address seller, uint256 tokenId, uint256 price) internal returns (Listing memory)
    {
        Listing memory _l = Listing(price, seller, 0);
        listings[contractAddr][tokenId].push(_l);     
        
        if(listings[contractAddr][tokenId].length == 1)   
            tokenIds.push(tokenId);    

        return _l;
    }

    function removeListing(address contractAddr,  address seller, uint256 tokenId) internal returns (Listing memory)
    {
        uint256 _lCount = listings[contractAddr][tokenId].length;
        for(uint256 i = 0; i < _lCount; i++)
        {
            if(listings[contractAddr][tokenId][i].seller == seller)
            {
                if(listings[contractAddr][tokenId].length == 0)
                {
                    removeElement_uint256(tokenIds, i);
                }

                return removeElement_Listing(listings[contractAddr][tokenId], i);
            }
        }
    }

    function removeElement_Listing(Listing[] storage array, uint256 index) private returns(Listing memory){
        Listing memory removedElement = array[index];
        
        array[index] = array[array.length - 1];
        array.pop();

        return removedElement;
    }

    function removeElement_uint256(uint256[] storage array, uint256 index) private returns(uint256){
        uint256 removedElement = array[index];
        
        array[index] = array[array.length - 1];
        array.pop();

        return removedElement;
    }

}