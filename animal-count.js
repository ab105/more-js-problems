function animalCount(miles){
    const animalsDensityFirst10PerMile = 10;
    const animalsDensitySecond10Mile = 50;
    const animalsDensityThirdRestMile = 100;
    if(miles <= 10){ 
        const count = miles*animalsDensityFirst10PerMile;
        return count;
    }
    else if(miles <=20){
        const firstDenseAnimals = 10*animalsDensityFirst10PerMile;
        const restMiles = miles - 10;
        const secondDEnsAnimals = restMiles * animalsDensitySecond10Mile;
        const total = firstDenseAnimals +  secondDEnsAnimals ; return total;
    }
    else{
        const firstDenseAnimals = 10*animalsDensityFirst10PerMile;
        const secondDEnsAnimals = 10*animalsDensitySecond10Mile;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles*animalsDensityThirdRestMile;
        const totalAnimals = firstDenseAnimals+secondDEnsAnimals+restDenseAnimals;
        return totalAnimals;
    }

}

const animals = animalCount(25);
console.log(animals);