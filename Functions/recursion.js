let isEven = (number) => {
    if(number < 0) 
        console.log('not a positive number');
    else if(number == 1)
        console.log('odd');
    else if (number == 0)
        console.log('even');
    else{
        number -= 1;
        console.log(`now number is ${number}`) 
        isEven(number);
    }
}

isEven(-1);