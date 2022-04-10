async function main() {
    const billion = await hre.ethers.getContractFactory("BillionaireBattles");
    const battles = await billion.deploy(
        ['Mark', 'John'],
        ['student', 'me'],
        ['image link', 'image link'],
        [100, 200],
        [100, 200],
        ['punch', 'punch'],
        ['kick', 'kick'],
        ['spin', 'spin'],
        [20, 20],
        [30, 30],
        [50, 50]
    );
    await battles.deployed();

    /*
        string[] memory names, 
        string[] memory descriptions, 
        string[] memory images,
        uint[] memory healths,
        uint[] memory maxHealths,
        string[] memory attack1Names,
        string[] memory attack2Names,
        string[] memory attack3Names,
        uint[] memory attack1Damage,
        uint[] memory attack2Damage,
        uint[] memory attack3Damage 
    */

    console.log('Deployed Contract to: ', battles.address);
    console.log(await battles.getReviveCost());
    await battles.mintItemById(0);
    await battles.mintItemById(1);
    const array = await battles.getCharactersFromAddress(battles.address);
    console.log(array);
    console.log(array[0].value);
}


const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();