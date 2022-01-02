//write a program to check whether given number is prime or not.//

var n = prompt("Enter any number");
var count = 1;
for(var i=2; i<n; i=i+1) {
   if(n%i == 0)
    {
    count=0;
    }
 }
  if(count==1)
  {
  alert("prime number");
  }
  else
  {
  alert("not a prime");
  }
