$(function(){
  var $img=$('img');
  var $inp=$('input');
  $img.mouseover(()=>{
    $inp.attr("type","text");
    $img.attr("src","close.png");
  });
  $img.mouseout(()=>{
    $inp.attr('type',"password");
    $img.attr('src',"open.png");
  })
  console.log('hello world');
});
