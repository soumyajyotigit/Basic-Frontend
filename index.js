function registration(){
    var name=document.getElementById("t1").value;
    var email=document.getElementById("t2").value;
    var username=document.getElementById("t3").value;
    var age=document.getElementById("t4").value;
    var gender=document.getElementById("t5").value;
    var password=document.getElementById("t6").value;
    var confirmpassword=document.getElementById("t7").value;

    var password_expression=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{6,12}$/; 
    var letters = /^[ A-Za-z ]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (name==''){
        alert('please enter your name');
    }
    else if(!letters.test(name)){
        alert('name field requred only alphabet charecters');
    }
    else if(email==''){
        alert('please enter your email id');
    }
    else if(!filter.test(email)){
        alert('invalid email');
    }
    else if(username==''){
        alert('please enter username');
    }
    else if(!letters.test(username)){
        alert('username field required only alphabets');
    }

    else if(password==''){
        alert('please enter password');
    }
    else if (confirmpassword==''){
        alert('please enter password');
    }
    else if(!password_expression.test(password)){
        alert('uppercase, lowercase, special charecter and numeric lerrrer are required in password field');
    }
    else if(password!=confirmpassword){
        alert('password mismatched');
    }
    else if(password.length<6){
        alert('password minimum length is 6');
    }
    else if(password.length>12){
        alert('password maximum length is 12');
    }
    else {
        alert('thanks for login');
        window.location="https://www.google.com/";
    }

}
function clearFunc(){
    document.getElementById("t1").value="";
    document.getElementById("t2").value="";
    document.getElementById("t3").value="";
    document.getElementById("t4").value="";
    document.getElementById("t5").value="";
    document.getElementById("t6").value="";
    document.getElementById("t7").value="";

}


    
// function registration()
// {

//     var name= document.getElementById("t1").value;
//     var email= document.getElementById("t2").value;
//     var uname= document.getElementById("t3").value;
//     var age=document.getElementById("t4").value;
//     var gender= document.getElementById("t5").value;
//     var pwd= document.getElementById("t6").value;			
//     var cpwd= document.getElementById("t7").value;
    

//     //email id expression code
//     var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
//     var letters = /^[ A-Za-z ]+$/;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//     if(name=='')
//     {
//         alert('Please enter your name');
//     }
//     else if(!letters.test(name))
//     {
//         alert('Name field required only alphabet characters');
//     }
//     else if(email=='')
//     {
//         alert('Please enter your email id');
//     }
//     else if (!filter.test(email))
//     {
//         alert('Invalid email');
//     }
//     else if(uname=='')
//     {
//         alert('Please enter the user name.');
//     }
//     else if(!letters.test(uname))
//     {
//         alert('User name field required only alphabet characters');
//     }
     
    

//     else if(pwd=='')
//     {
//         alert('Please enter Password');
//     }
//     else if(cpwd=='')
//     {
//         alert('Enter Confirm Password');
//     }
//     else if(!pwd_expression.test(pwd))
//     {
//         alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
//     }
//     else if(pwd != cpwd)
//     {
//         alert ('Password not Matched');
//     }
//     else if(document.getElementById("t5").value.length < 6)
//     {
//         alert ('Password minimum length is 6');
//     }
//     else if(document.getElementById("t5").value.length > 12)
//     {
//         alert ('Password max length is 12');
//     }
//     else
//     {				                            
//            alert('Thank You for Login & You are Redirecting to pcs global pvt ltd home page');
//            // Redirecting to other page or webste code. 
//            window.location = "https://www.pcsglobal.in/"; 
//     }
// }
// function clearFunc()
// {
//     document.getElementById("t1").value="";
//     document.getElementById("t2").value="";
//     document.getElementById("t3").value="";
//     document.getElementById("t4").value="";
//     document.getElementById("t5").value="";
//     document.getElementById("t6").value="";
//     document.getElementById("t7").value="";
// }


