// let input=require("readline-sync")
// let number=input.questionInt("enter the number")
// let i=1
// do{
//     if (i%3===0 && i%7===0){
//         console.log(i,"navgurukul")
//     }
//     else if (i%3===0){
//         console.log(i,"nav")
//     }
//     else if (i%7===0){
//         console.log(i,"gurukul")
//     }
    
//     i++
// }
// while (i<=number){
//     }

        //   ( while loop)

// let input=require("readline-sync")
// let number=input.questionInt("enter the number")
// let i=1
// while (i<=number) {
//     if (i%3===0 && i%7===0){
//         console.log(i,"navgurukul")
//     }
//     else if (i%3===0){
//         console.log(i,"nav")
//     }
//     else if (i%7===0){
//         console.log(i,"gurukul")
//     }
    
//     i++
// }

            //  (for loop)

let input=require("readline-sync")
let number=input.questionInt("enter the number")
for(let i=1;i<=number;i++) {
    if (i%3===0 && i%7===0){
        console.log(i,"navgurukul")
    }
    else if (i%3===0){
        console.log(i,"nav")
    }
    else if (i%7===0){
        console.log(i,"gurukul")
    }
}
