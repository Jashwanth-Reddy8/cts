window.onload =  function(){
    if(window.jQuery){
        document.getElementById("msg").innerHTML = "jQUERY is loaded";
    } else{
        document.getElementById("msg").innerHTML = "jQUERY is not loaded";
    }
}