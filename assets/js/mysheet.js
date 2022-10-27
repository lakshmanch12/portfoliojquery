
    //Username validation started
function submitValidation(){
   
    var username = $('#username').val();
  var dob= $('#birth').val();
     console.log("ddd",dob)
    var email= $('#inputEmail').val();
    var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var pnumber= $('#inputPhonenumber').val();
    var pnumberPattern = /^[6-9]\d{9}$/;
    var gender= $('input[type="radio"]:checked').val();
     console.log("hageni",gender)
     
    var country= $('#inputCountry').val();
    console.log("hai",country)
   var check = $('input[type="checkbox"]:checked').val();
    console.log("hacheck",check)
  let print = userprint = false;
   if (nameValidation(username)) {
    if (dobValidation(dob)) {
      if (emailValidation(email, emailPattern)) {
        if (phoneValidation(pnumber, pnumberPattern)) {
          if (countryValidation(country)) {
            if (genderValidation(gender)) {
              console.log('checkboxValidation', checkboxValidation(check))
              if (checkboxValidation(check)) {
              console.log('checkboxValidation1', checkboxValidation(check)) 
              $("#popupMsg").css({ "display": "block"} );
              $("#username").hide();


            }
          }
        }
      }
    }
  }
}    
}

function nameValidation(username) { 
  
 if (username == ""){
         $('#err').html('Please fill the field !');
         $('#err').css({"color": "red", "display": "block"} );
         userprint = false;
        return false;
       }
          else if (username.length <= 2 ){
        $('#err').html('Username should be more then 2 character !');
         $('#err').css({"color": "red", "display": "block"} );
        userprint = false;
        return false;
       }
        else  if  (username.length >= 2){
        $('#err').css('display','none');
        userprint = true;
         return true;
       }
   }
function dobValidation(date)
{
    if(date == false)
    {
   $('#err1').html('Please fill the field !');
         $('#err1').css({"color": "red", "display": "block"} );
         dobprint = false;

          return false;
    }
    else if(date) 
    {
        $('#err1').css('display','none');
         dobprint = true;
      return true;
    }
}
function emailValidation(email,emailPattern){
  
  if(!email){
      $('#err2').html('Please fill the field !');
         $('#err2').css({"color": "red", "display": "block"} );
         emailprint = false;
      return false;
    }else if (emailPattern.test(email) == false){
    $('#err2').html('Please fill the field !');
         $('#err2').css({"color": "red", "display": "block"} );
         emailprint = false;
      return false;
    }else if(email){ 
         $('#err2').css('display','none');
         emailprint = false;
      return true;
    }
}
function phoneValidation(pnumber,pnumberPattern){
    if(!pnumberPattern.test(pnumber)){
    $('#err3').html('Please enter valid  number');
    $('#err3').css({"color": "red", "display": "block"} );
      mobileCheck = false;

    return false;
   }
else if(pnumberPattern.test(pnumber)){
     $('#err3').css({ "display": "none"} );
       mobileCheck = true;
   
     
     return true;

     }
   
}
function countryValidation(country) { 

   if(country != 1)
  {
   $('#err4').html('Please fill the field !');
         $('#err4').css({"color": "red", "display": "block"} );
    return false;
  }
  else if (country == 1)
  {
    $('#err4').css({ "display": "none"} );
    return true;
  }
}

 function genderValidation(gender)
  {
    if(gender == undefined)
    {
        $('#errGender').html('Please fill the field !');
         $('#errGender').css({"color": "red", "display": "block"} );
      return false;
    }
    else if (gender == 'male' || 'female')
    { $('#errGender').css({ "display": "none"} );
      return true;
    }
}
function checkboxValidation(check) {
  if (check == 'check') {
    $('#errcheckbox').css({ "display": "none" });
      return true;
    
    check = true;
  }
  else if (check == undefined) {
    $('#errcheckbox').html('Please fill this field');
    $('#errcheckbox').css({ "color": "red", "display": "block" });
     return false;
  }
}
