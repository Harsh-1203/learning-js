function sum(a){
    if(!a){
        return 0;
    }
    let ans=a;
    function smallerSum(b){
        if(!b){
            return ans;
        }
        ans+=b;
        return smallerSum;
    }
    return smallerSum;
}

console.log(sum());
console.log(sum(10)());
console.log(sum(10)(20)());
console.log(sum(10)(20)(30)());
console.log(sum(10)(20)(30)(40)())