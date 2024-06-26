let loginBtn=document.getElementById('loginBtn');
loginBtn.addEventListener('click',async (e)=>{
    e.preventDefault();
    let usernamefeild=document.getElementById("username").value;
    let passwordfeild=document.getElementById("password").value;
    await fetch('http://localhost:3500/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({
            username : usernamefeild,
            password : passwordfeild
        })
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        if(data.status==true){
            window.location.href="http://localhost:3500/index.html";
        }
        else{
            alert(data.msg);
        }
        console.log(data);
    })
})