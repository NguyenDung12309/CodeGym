function fibonaci(n : number) : number
{
    if(n == 0)
    {
        return 0;
    }
    if(n == 1)
    {
        return 1;
    }
    return fibonaci(n-1) + fibonaci(n-2);
}

let sum : number = 0
for(let i : number = 0 ; i < 10 ; i++){
    console.log(fibonaci(i)+ ",")
    sum += fibonaci(i)
}

console.log("Tổng là: " + sum)
