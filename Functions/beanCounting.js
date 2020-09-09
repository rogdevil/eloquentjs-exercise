let countBs = (stringValue, letter) => {
    let count = 0
    for(let i = 0; i< stringValue.length; ++i){
        if(stringValue[i] == letter)
            count += 1;
    }

    console.log(`${letter} is reperated ${count} times in ${stringValue}`);
}

countBs("aryan is a good boy", 'o')