// Perfect number, a positive integer that is equal to the sum of its proper divisors. The smallest perfect number is 6, which is the sum of 1, 2, and 3.

let input=require("readline-sync")
let perfect_num=input.questionInt("enter the perfect number")
var i=1
let sum=0
while (i<=perfect_num){
    if (i%perfect_num==0){
        sum=sum+i
    }
    i++

}
if (perfect_num==sum){
    console.log("PERFECT NUMBER")
}
else{
    console.log("NOT PERFECT NUMBER")
}