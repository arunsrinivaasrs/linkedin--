/**
 * Created by Jan on 6/12/2014.
 */

function getEmail()
{
      /* var email = $("#email").value;
       var password = $("#password").value;*/
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

}


$(document).ready(function(){
       $("#login").click(function(){

           var email = $("#email").value;
           var password = $("#password").value;
           var data = {};
           data.email=email;
           data.password=password;

           $.ajax({
               type: 'POST',
               data: JSON.stringify(data),
               contentType: 'application/json',
               url: 'http://localhost:8008/endpoint',
               success: function(data) {
                   console.log('success');
                   console.log(JSON.stringify(data));
               }
               });

       });

});

function sample()
{
   // alert("sample");
}



