$(document).ready(function() {
  console.log("ready");
    
$('section#sign-up-screen').hide();
                  
$('#sign-up').click(function(){
    $('#home-screen').fadeOut(); 
  });

$('#sign-up').click(function(){
    $('#sign-up-screen').fadeIn();
});

$('.log-btn').click(function(){
    $('#home-screen').fadeOut(); 
  });

$('.log-btn').click(function(){
    $('#main-screen').fadeIn(); 
  });

$('#submit-btn').click(function(){
    $('#sign-up-screen').fadeOut();
});
    
$('#submit-btn').click(function(){
    $('#main-screen').fadeIn(); 
  });
});