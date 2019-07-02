function myFunction() {
  var x = document.getElementById("myDIV");
  var y= document.getElementById("myDIV1");
  var l= document.getElementById("mySection");
  var m= document.getElementById("mySection1");
  l.style.display = 'block';
  x.style.display = 'block';
  m.style.display = 'none';
  y.style.display = 'none';


 }
 function myFunction1() {
  var x = document.getElementById("myDIV");
  var y= document.getElementById("myDIV1");
  var l= document.getElementById("mySection");
  var m= document.getElementById("mySection1");
  l.style.display = 'none';
  x.style.display ='none';
  y.style.display ='block';
  m.style.display ='block';
 }

 $(document).ready(function() {
  $('.togl').click(function() {
    $('.togl').removeClass("active");
    $(this).addClass("active");
  });
});
