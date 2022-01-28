function mulby4(x){
    return x*4;
}
function addby9(y){
    return y+9;
}

var n= parseInt(prompt("enter the number"));

function manupulate(n,x,y){
    return [x(n),y(n)]
}
 

const ans =  ( manupulate(n,mulby4,addby9));

document.write(`multiply  by 4 and addition by 9  are,${ans} respectivily`)
