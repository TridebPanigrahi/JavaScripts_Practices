//// Reverse the string by word
//// output should be 'siht si  tpircSavaj edoc

// //1st approach--------------------------------------------------------

// let str = 'this is javaScript code'

// let arr = str.split(' ')
// function getWordReverse(arr){
//     let store =""
//     for(let i =0; i<arr.length;i++){
//         for(let j=arr[i].length-1;j>=0;j--){
//             store= store+arr[i].charAt(j)
//         }
//         store+=" "
//     }
//     return store
// }

// console.log(getWordReverse(arr))

////2nd approach----------------------------------------------------

// let str = 'this is javaScript code'
// let temp = str.split(" ")
// let rev = temp.reverse()
// str = rev.join(" ")

// function getWordReverse(str){
//     let store =""
//     for(let i= str.length-1; i>=0;i--){
//         store = store+str.charAt(i)
//     }
//     return store
// }
// console.log(getWordReverse(str))

////---------------------------------------------------------------