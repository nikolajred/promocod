let checkPromoCod = (num) => {
    let result = 0;
    let array = [];
    let arrayOdd = [];
    let arrayEven = [];
    let newArrayOdd = [];
    num = Math.floor(num);
    console.log('num equals', num);
    if (checkValidNumber(num)) {
        //create array of numbers from number

        while (num !== 0) {
            array.push(num % 10);
            num -= num % 10;
            num /= 10;
        }
        array.reverse();
        console.log('array of num', array);
       //create array of indexes' odd end even numbers from array of numbers
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                arrayEven.push(i);
            } else {
                arrayOdd.push(i);
            }
        }

        console.log("array of indexes' odd numbers", arrayOdd);
        console.log("array of indexes' even numbers", arrayEven);

        //create new array of odd indexes which are suitable condition 1
        for (let i = 0; i < arrayOdd.length; i++) {
            if (((arrayOdd[i] === arrayOdd[i + 1] - 1) || (arrayOdd[i] === arrayOdd[i - 1] + 1)) &&
                ((arrayOdd[i] !== arrayOdd[i + 2] - 2) || (arrayOdd[i] !== arrayOdd[i + 1] - 1))) {
                newArrayOdd.push(arrayOdd[i]);
            }
        }
        //transform array of odd indexes which are suitable condition 1 into new array of numbers
        let newArray = [];
        for (let i = 0; i < newArrayOdd.length; i++) {
            newArray.push(array[newArrayOdd[i]])
        }
        console.log('array of odd indexes which are suitable of condition 1 ',newArrayOdd);
        console.log('array of numbers which are suitable of condition 1 ',newArray);
        //execute checking condition 1 and 2
        if (newArray.length > 3) {
            if ((newArray.length === 4) && (newArray[0] < newArray[1]) && (newArray[2] < newArray[3])) {
                console.log(2000);
                return result = 2000;
            } else if (((newArray.length === 6) && (newArray[0] < newArray[1]) && (newArray[2] < newArray[3]) && (newArray[4] < newArray[5]))) {
                console.log(2000);
                return result = 2000;
            } else {
                console.log(1000);
                return result = 1000;
            }
        } else {
            //execute checking condition 3
            let newArrayOddNumbers = [];
            let sumOddNumbers = 0;
            let newArrayEvenNumbers = [];
            let sumArrayEvenNumbers = 0;
            for (let i = 0; i < arrayOdd.length; i++) {
                newArrayOddNumbers.push(array[arrayOdd[i]]);
                sumOddNumbers += newArrayOddNumbers[i];
            }
            console.log('sum of odd numbers equal ', sumOddNumbers);
            console.log('array of odd numbers ', newArrayOddNumbers);
            for (let i = 0; i < arrayEven.length; i++) {
                newArrayEvenNumbers.push(array[arrayEven[i]]);
                sumArrayEvenNumbers += newArrayEvenNumbers[i];
            }
            console.log('sum of even numbers equal ', sumArrayEvenNumbers);
            console.log('array of even numbers ', newArrayEvenNumbers);
            if (sumArrayEvenNumbers > sumOddNumbers) {
                console.log(100);
                return result = 100;
            } else {
                console.log(0);
                return result;
            }
        }
    }
    console.log(0);
    return result;
}


let checkValidNumber = (num) =>{
    let length = 0;
    if((typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num)){

        do {
            num /= 10;
            length++;
        } while (num >= 1);
        if(length === 8){
            console.log(`valid positive integer and length equals ${length}`);
            return true;
        }else {
            console.log(`valid positive integer but length equals ${length}`);
            return false;
        }

    }else{
        console.log("it's not valid number");
        return false;
    }
}

module.exports = checkPromoCod;


