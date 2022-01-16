//Design a function to return multiplication of first two arguments and sum of the rest

function sum(a,b,...args){
    let numSum=0;
    let numProd=a*b;

    for(const arg of args){
        numSum +=arg;
    }
    return [numProd,numSum];
}
console.log(sum(12,3,4,5,10));
