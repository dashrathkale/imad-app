console.log('Loaded!');



/*var element=document.getElementById('mt');
element.innerHTML='dashrath';
// code for image changes
var img=document.getElementById('madi');
var marginRight=0;
function moveLeft()
{
    marginRight=marginRight+1;
    img.style.marginRight=marginRight + 'px';
}
img.onclick=function()
{
    var interval=setInterval(moveLeft,10);
    //img.style.marginLeft='200px';
};*/
var button=document.getElementById('counter');
button.onclick=function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if (request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://dashrathkale.imad.hasura-app.io/counter',true);
    request.send(null);
};