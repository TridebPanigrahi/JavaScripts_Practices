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
/////==============================================================

///// find maximum occuring charecter
//// output should be 'a'


//// 1st approach
// let str = 'thisisjavaScriptcodeandyouhavetofindmaximumcharecter'

// function findMaxCharecter(str){
//     let maxcount=0
//     let arr = str.split('')
//     let t=arr[0]
//     for( let i=0; i<arr.length;i++){
//         let count =1
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]=== arr[j] && arr[j]!='-1'){
//                 count= count+1
//                 arr[j]='-1'
//             }
//         }
//         if(count>maxcount){
//             maxcount = count
//             t=arr[i]
//         }
//     }
//     return t
// }
// console.log(findMaxCharecter(str))

////=========================================================================
let obj = {
    employee: {
      address: { name: 'abc', age: 20 }
    },
    employee1: { name: 'avf', age: 25 }
  };
  
  function getAgeByNameRecursive(obj, name) {
    for (let key in obj) {
        if (obj[key] && obj[key].name === name) {
            return obj[key].age;
        }
        const age = getAgeByNameRecursive(obj[key], name);
        if (age !== null) {
            return age;
        }
      } 
    }
  console.log(getAgeByNameRecursive(obj, 'avf'));