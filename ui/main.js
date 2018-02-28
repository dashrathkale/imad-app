console.log('Loaded!');



var element=document.getElementById('mt');
element.innerHTML='dashrath';
// code for image changes
var img=document.getElementById('madi');
var marginLeft=0;
function moveLeft()
{
    marginRight=marginRight+10;
    img.style.marginRight=marginLeft + 'px';
}
img.onclick=function()
{
    var interval=setInterval(moveLeft,100);
    //img.style.marginLeft='200px';
};