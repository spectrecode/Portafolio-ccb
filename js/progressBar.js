var $pro = $('#bar');
var Color = function(){
var r = function(){
return Math.floor(Math.random() * 360)};
return 'hsla('+r()+',50%, 50%, .8)';};
$pro.css({ backgroundColor:Color });
// 0%
$('#bar_000 span').on('click',function(){
  $pro.stop().animate({ width:'0%' }, 150);
});
// 25%
$('#bar_025 span').on('click',function(){
  $pro.stop().animate({ width:'25%' }, 150);
});
// 50%
$('#bar_050 span').on('click',function(){
  $pro.stop().animate({ width:'50%' }, 150);
});
// 75%
$('#bar_075 span').on('click',function(){
  $pro.stop().animate({ width:'75%' }, 150);
});
// 100%
$('#bar_100 span').on('click',function(){
  $pro.stop().animate({ width:'100%' }, 150);
});