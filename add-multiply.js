function woodCalculator(chair,table,bed){
    const perChairWood = 3;
    const pertableWood = 10;
    const perBedWood = 50;

    //wood Calculation
    const chairWoodQuantity = chair*perChairWood;
    const tableWoodQuantity = table*pertableWood;
    const bedWoodQuantity = bed*perBedWood;

    //adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}

const firstOption = woodCalculator(1,1,1);
console.log(firstOption);