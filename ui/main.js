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
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if (request.status===200)
            {
                alert('logged in sucessfully');
            }
            else if(request.status===403)
            {
                alert('username and password is incorrect');
            
            }
            else if(request.status==500)
            {
                alert('something went wrong with server');
            }
        }
    };
    var username= document.getElementById('username').value;
    var password=document.getelementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://dashrathkale.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','applciation/json');
    request.send(JSON.stringify({username: username, password:password}));
};
/*
var nameInput=document.getElementById('name');
var name= nameInput.value;

var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    var names=['name1', 'name2' ,'name3' ,'name4'];
    var list='';
    for(var i=0; i<names.length; i++)
    {
        list += '<li>'+ names[i] +'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};


*/