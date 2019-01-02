function increaseValue() {
  var value = parseInt(document.getElementById('add1').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('add1').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('add1').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('add1').value = value;
}


function open_doors()
{
  $(".ldoor").animate({width:'9%'},3000);
 $(".rdoor").animate({width:'9%'},3000);
 $("#close").animate({opacity:1},1000);
 $("#open").animate({opacity:0},1000);
}
function close_doors()
{
  $(".ldoor").animate({width:'50%'},2000);
 $(".rdoor").animate({width:'50%'},2000);
 $("#open").animate({opacity:1},5000);
 $("#close").animate({opacity:0},1000);
}