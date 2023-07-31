$(document).ready(function(){
    $('#goRight').on('click', function(){
      $('#slideBox').animate({
        'marginLeft' : '0'
      });
      $('.topLayer').animate({
        'marginLeft' : '100%'
      });
    });
    $('#goLeft').on('click', function(){
      $('#slideBox').animate({
        'marginLeft' : '50%'
      });
      $('.topLayer').animate({
        'marginLeft': '0'
      });
    });
  });

  function Login(){ 
    var usuario=document.getElementById("user").value; 
    var password=document.getElementById("password").value; 
    if (usuario=="admin" && password=="admin") { 
      window.location="https://www.google.com/"; 
    } else {
      alert("Usuario y contraseña inválidos"); 

    }

} 