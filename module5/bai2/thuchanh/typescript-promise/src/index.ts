let money : number = 10000;

const butACar = (car:any) => {
    return new Promise ( ((resolve, reject) => {
        setTimeout(() => {
            if(money >= 10000) {
                resolve("can buy" + car)
            }else{
                reject("do not enough money")
            }
        })
    }) )
}

money  = 101111111110;
const promise = butACar("Vinfast")
    .then((response) => {
    console.log(response)
    } , error => {
        console.log(error)
        }
    )
