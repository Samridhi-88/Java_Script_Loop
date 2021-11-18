// an integer that is divisible by the sum of its digits when written in that base. //


let input=require("readline-sync")
let num=input.questionInt("enter any number=")
let sum=0
n=num
while (num>0){
	rem=num%10
	sum=sum+rem
	num=Math.floor(num/10)
}
if (n%sum==0){
    console.log("is a harshad number")
}
else{
    console.log(" not a harshad number")
}