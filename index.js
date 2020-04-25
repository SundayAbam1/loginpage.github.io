function validation(){
 var firstName = document.getElementById("firstName").value;
 var lastName = document.getElementById("lastName").value;
 var phone = document.getElementById("phone").value;
 var email = document.getElementById("email").value;
 var message = document.getElementById("message").value;
 var error_message = document.getElementById("error_message");
 var text;



 error_message.style.padding = "15px";

  if (firstName.length < 5){
      text = "Please Enter valid firstName";
      error_message.innerHTML = text;
      return false;
  }

  if (lastName.length < 5){
    text = "Please Enter lastName";
    error_message.innerHTML = text;
    return false;
}


if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid phone number";
    error_message.innerHTML = text;
    return false;
}
    
    
  if(mail.index0f('@') == -1|| email.length < 6){
    text = "Please Enter valid email";
    error_message.innerHTML = text;
    return false;
}


   
  if(name.length < 6){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
}
  

      
  if(message.length <= 200){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

   alert("form submitted successfully!");
   return true;

 
}



