function display(){
    var name=document.getElementById("sname").value;
    var cs=document.getElementById("course").value;
   if(name.length === 0 || name === null || name === ""){  
      document.getElementById("greet").innerHTML="Name cannot be empty";  
    }
    else{
     document.getElementById("greet").innerHTML=
     "Hi,"+name+". You have successfully registered for the "+cs+" course.";
}
}
