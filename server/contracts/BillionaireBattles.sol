// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
 
contract BillionaireBattles is ERC721 {

    uint listingFee;
    uint reviveCost;

    constructor() ERC721("Billionaire Battles", "BBT") {
        listingFee = 0.05;
        reviveCost = 0.05;
    }
}