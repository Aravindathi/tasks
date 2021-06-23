**Anonymous functions code**

1. Odd numbers


     function oddNumbers()
{
var char = userInput[0].split("")
var final = ""

    for ( i in char)
      if (char[i] % 2 != 0)
      final = final + char[i]
      return final
}

2. Title caps

function toTitleCase()
{
var char = userInput[0]
char = JSON.stringify(char).toLowerCase()
char = userInput[0].split(" ")


for ( i in char)

     char[i] = char[i].charAt(0).toUpperCase() + char[i].slice(1)
     return char

}

3. Sum of numbers

function SumOfNumbers()
{
   var num = userInput[0].split(" ")
   var sum = 0
     for (i in num)
      {
        sum = sum + +num[i]
      }
        return sum
}

4. Prime numbers

function toFindPrime(x)
 {
     for (i=0; i <= (x**1/2); i++)
       if (x % i == 0)
         return true
       else
         return false
 }
function toPrintPrime()
{
   var num = userInput[0].split(" ")
   var prime =""
   
   for (j in num)
   {
     if (toFindPrime(num[j]) == true)
       prime = prime + num[j]
   }
   return prime
}

5. Palindrome

function toFindPalindrome()
{
    var char = userInput[0].split("")
   
    var rev = char.reverse()
    
    if (char === rev)
      console.log("yes")
    else
      console.log ("no")
      
}
 

