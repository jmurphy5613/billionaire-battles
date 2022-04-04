// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
 
contract BillionaireBattles is ERC721 {

    uint listingTransactionFee; //fee taken from each listing
    uint reviveCost;

    constructor() ERC721("Billionaire Battles", "BBT") {
        listingTransactionFee = 0.05;
        reviveCost = 0.05;
    }

    struct character {
        //character bio
        string name;
        string description;
        string image;

        uint health;
        uint maxHealth;

        string attack1Name;
        string attack2Name;
        string attack3Name;
        uint attackDamageAttack1;
        uint attackDamageAttack2;
        uint attackDamageAttack3;
    }

    mapping(uint => character) characters;


    // getters
    function getListingFee() public view returns (uint) {
        return listingFee;
    }

    function getReviveCost() public view returns (uint) {
        return reviveCost;
    }
}