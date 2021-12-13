function validateEmail(email){
    const re1=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(re1))
    return "valid Email address!." ;
    else 
    return "Invalid Email address!.";
}
console.log(validateEmail("jashwanth836@gmail.com"));