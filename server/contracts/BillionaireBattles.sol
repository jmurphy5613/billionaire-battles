// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";
 
contract BillionaireBattles is ERC721 {

    uint listingTransactionFee; //fee taken from each listing
    uint reviveCost;
    uint numberOfCharacters = 0;

    constructor(
        string[] memory names, 
        string[] memory descriptions, 
        string[] memory images,
        uint[] memory healths,
        uint[] memory maxHealths,
        string[] memory attack1Names,
        string[] memory attack2Names,
        string[] memory attack3Names,
        uint[] memory attack1Damages,
        uint[] memory attack2Damages,
        uint[] memory attack3Damages
    ) ERC721("Billionaire Battles", "BBT") {
        console.log('hi');
        listingTransactionFee = 5;
        reviveCost = 5;
        for(uint i = 0; i < 2; i++) {
            characterRoster.push(character({
                owner: address(this),
                isBeingSold: false,
                name: names[i],
                description: descriptions[i],
                image: images[i],
                health: healths[i],
                maxHealth: maxHealths[i],
                attack1Name: attack1Names[i],
                attack2Name: attack2Names[i],
                attack3Name: attack3Names[i],
                attackDamageAttack1: attack1Damages[i],
                attackDamageAttack2: attack2Damages[i],
                attackDamageAttack3: attack3Damages[i]
            }));
        }
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

        _safeMint(msg.sender, numberOfCharacters);

        console.log('Minted to: ', msg.sender);
    }


    // getters
    function getListingFee() public view returns (uint) {
        return listingTransactionFee;
    }

    function getReviveCost() public view returns (uint) {
        return reviveCost;
    }

    function getAllCharacters() public view returns (string memory) {
        return characters[1].name;
    }

    function getCharactersFromAddress(address current) public view returns (uint[] memory) {
        uint size = 1;
        uint[] memory ids = new uint[](size);
        for(uint i = 0; i < numberOfCharacters; i++) {
            if(characters[i].owner == current) {
                ids[size-1] = i;
                size++;
            }
        }
        return ids;
    }

}