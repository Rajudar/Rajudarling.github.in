 var like_ref = document.getElementById("like");
 var img_ref = document.getElementById("img");

like_ref.addEventListener('click', function(){
    if(like_ref.style.backgroundColor == "white"){
        like_ref.style.backgroundColor ="red";
    }
    else{
        like_ref.style.backgroundColor="white"
    }
 
})
img_ref.addEventListener('dblclick', function(){
    like_ref.style.backgroundColor = "red"
    
})
