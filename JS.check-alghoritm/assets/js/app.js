document.body.style.backgroundColor = 'aliceblue';
// program to check (Array.isArray())

 let checkArray = function (arr)  {

     if(Array.isArray(arr)) {
         let min = arr[0]
         for(let i = 0; i < arr.length; i++) {
             if(arr[i] < min) {
                 min = arr[i]
             } 
         }
          console.log(min)
     }
 }

 checkArray([666,999,24,700,1,9,696,969,24,2,3]);

 // program to check duplicate letters in string

 function duplicateCheck(str)
 {
 for(i=0; i < str.length; i++)
   {
    if (str.split(str[i]).length-1 > 1) 
    {
        i++;
        console.log(i)
    }  
   }
   return false;
 
 } 
 str= "Chronosphere";
 console.log(duplicateCheck(str));
 console.log(duplicateCheck("time"));

// program to check if the string is palindrome or not

let text = document.getElementById('input');
let button = document.getElementById('button');

function checkPalindrome(string) {

    let arrayValues = string.split('');

    let reverseArrayValues = arrayValues.reverse();

    let reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        alert('It is a palindrome');
        document.body.style.backgroundColor = 'green'
    }
    else {
        alert('It is not a palindrome');
        document.body.style.backgroundColor = 'red'
    }
}

button.onclick = () => {
    checkPalindrome(text.value);
};