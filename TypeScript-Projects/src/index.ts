const value: string = "Hello"

const apiStatus: "pending" | "success" | "reject" = "pending"

const arr = ["11", "22", "33", "44"]

let res: string | undefined;

for(let a of arr){
    if(a === "33"){
        res = a;
    }
    res = "55"
}

console.log(res);
