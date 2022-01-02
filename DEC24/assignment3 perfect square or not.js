//write a program to check given number is perfect square are not.

 var a=prompt("enter any number");

 var flag=0;
 for(var i=1; i<a;i=i+1){
    if(a%i==0 && a/i==i){
      flag=1;
      break;
    }
 }
 if(flag==1){
    alert("Perfect Square Number");
 }else{
     alert(" not a Perfect Square Number");
 } 
