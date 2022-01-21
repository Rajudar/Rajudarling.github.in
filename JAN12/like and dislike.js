var c =0;
document.getElementById('counts').innerText =c;
 
function increase(){
    c = c+1;
    document.getElementById('counts').innerText =c;
}

function decrease(){
    c =c-1;
    document.getElementById('counts').innerText =c;
}
