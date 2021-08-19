function add(num1,num2){
    const sum = num1+num2;
    if(typeof(num1)!='number'){
        return 'invalid input';
    }
    return sum;
}

const firstTotal = add(63, 7);
console.log(firstTotal);

const secondTotal = add(60 + 70);//input error ase aita debug or        //console.log kore kore dekhte parbo kuthay ki vhul hoyese
console.log(secondTotal);

function multiply(num1,num2){
    const result = num1*num2;
    return result;
}
const firstResult = multiply(60, 7);
console.log(firstResult);