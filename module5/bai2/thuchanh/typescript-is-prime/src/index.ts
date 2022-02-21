let array : Array<number> = [1,5,9,2,6,15,19,35,51,53];
let sum : number = 0;

for(let number of array){
    if(isPrime(number)){
        sum += number
    }
}

console.log("tổng các số nguyen tố trong mảng là: " + sum)

function isPrime(number: number):boolean {
    let isPrime : boolean = true;
    if(number < 2){
        isPrime = false;
    }else if (number > 2){
        for(let i = 2; i <= Math.sqrt(number), i++){
            if(number % i == 0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}





