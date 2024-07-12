var form =document.querySelector("form")
var error=[]
form.addEventListener('submit',function(e){
    var username=document.getElementById('name')
    var age=document.getElementById('age')
    var gender=document.getElementById('gender')
    var phoneNo=document.getElementById('phone')
    var email=document.getElementById('email')
    var submitBtn=document.getElementsByClassName('btn')
    if(username.length>30){
        alert("Please enter a valid user name")
    }
    else if(age.length>3){
       alert("Enter the valid age")
    }
    else if(gender.value!="Male"&&gender.value!="Female"&&gender.value!="Other"){
        alert("Enter the appropriate gender")
    }
    else if(phoneNo.value.length!=10){
        alert("Enter the valid Phone number")
    }else{
    alert("Form is submitted")

    }
    
})