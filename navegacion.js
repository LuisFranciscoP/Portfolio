$(document).ready(function(){
  $('ul.barra li a:first').addClass('active');
  $('.sections div').hide();
  $('.sections div:first').show();

  $('ul.barra li a').click(function(){
    $('ul.barra li a').removeClass('active');
    $(this).addClass('active');
    $('.sections div').hide();
    $('.main').hide();

    var activeBar=$(this).attr('href');
    $(activeBar).show();
});

});
