$(document).ready(function() {
  console.log("ready");
    
//$('section#home-screen').hide();    
$('section#sign-up-screen').hide();
$('section#main-screen').hide();
$('section#sidebar').hide();
$('section#chore-form').hide();
                  
$('#sign-up').click(function(){
    $('#home-screen').fadeOut(); 
  });

$('#sign-up').click(function(){
    $('#sign-up-screen').fadeIn();
});

$('.log-btn').click(function(){
    $('#home-screen').fadeOut();
    $('#home-page').fadeOut();
  });

$('.log-btn').click(function(){
    $('#main-screen').fadeIn(); 
  });

$('#submit-btn-1').click(function(){
    $('#sign-up-screen').fadeOut();
    $('#home-page').fadeOut();
});
    
$('#submit-btn-1').click(function(){
    $('#main-screen').fadeIn(); 
  });
    
$('.list-icon').click(function(){
    $('#sidebar').fadeIn();
    $('#sidebar').show().css('position', 'absolute');
    $('.add-chore-list').hide();
    $('.add-icon-large').hide();
});
    
$('.back-icon').click(function(){
    $('#sidebar').fadeOut();
    $('.add-chore-list').show();
    $('.add-icon-large').show();
});

$('.add-chore-list').click(function(){
    $('#chore-form').fadeIn();
    $('.add-chore-list').hide();
    $('.add-icon-large').hide();
});

$('.add-icon-large').click(function(){
    $('#chore-form').fadeIn();
    $('.add-chore-list').hide();
    $('.add-icon-large').hide();
});
   
$('#submit-btn-2').click(function(){
    $('#chore-form').fadeOut();
});
    
$('#submit-btn-2').click(function(){
    $('#main-screen').fadeIn(); 
});
});
    

