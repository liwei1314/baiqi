$('.fieldset').click(function (e) { 
    console.log(123)
    $('.contentinfo').hide();
    $('.boxinfo').show();
    $('.footer').css('background', '#fff');
    $('.footer span').css('color', '#222');
    
  
    e.preventDefault();
    
});