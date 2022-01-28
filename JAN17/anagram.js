const str1 = "RAJA";
document.write('<h1>string 1 = "RAJA"</h1>' ); 
const str2 = "AJAR";
document.write('<h1>string 2 = "AJAR"</h1>' );
const x = str1.split('').sort();
const y =   str2.split('').sort();

 

function isanagram(x,y){
    let n1 = str1.length;
    let n2 = str2.length;
   
     
    if (n1 != n2)
        return false;
   
      
    for (let i = 0; i < n1; i++)
        if (x[i] != y[i])
            return false;
   
    return true;


}
if (isanagram(x,y))
document.write('<h1>The two strings are anagram</h1>' );
else
document.write('<h1>The two strings are not anagram</h1>');
