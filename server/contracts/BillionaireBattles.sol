// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
 
contract BillionaireBattles is ERC721 {

    uint listingTransactionFee; //fee taken from each listing
    uint reviveCost;
    uint numberOfCharacters = 0;

    constructor() ERC721("Billionaire Battles", "BBT") {
        listingTransactionFee = 5;
        reviveCost = 5;
        
    }

    struct character {
        address owner;
        bool isBeingSold;

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

    character[] characterRoster;

    function mintItemById(uint id) public {
        //make ids valid
        require(id >= 0, "Must use valid ID");
        require(id < characterRoster.length, "ID is too large");
        
        numberOfCharacters++;
        characters[numberOfCharacters] = characterRoster[id];

        _safeMint(msg.sender, characterRoster[id].index);
    }



    // getters
    function getListingFee() public view returns (uint) {
        return listingTransactionFee;
    }

    function getReviveCost() public view returns (uint) {
        return reviveCost;
    }

    function getCharactersFromAddress(address current) public view returns (uint []) {

        uint[] temp;

        for(uint i = 0; i < numberOfCharacters; i++) {
            if(characters[i].owner == current) {
                temp.push(i);
            }
        }
        return temp;
    }

}