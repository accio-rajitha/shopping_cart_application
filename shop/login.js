let email = document.getElementById('email');
let password = document.getElementById('password');


function generateToken(){
     return Math.random(0,1000000).toString();
}

document.getElementById('login').addEventListener("click", ()=>{
    if(email.value == "" || password.value == ""){
          //please make sure its not empty
    }else{
    let users = JSON.parse(localStorage.getItem('users') ?? "[]");
    if(users.length>0){
        let user = users.filter((user) => user.email == email.value);
        if(user.length>0){
            //user exists
            let obj = user[0];
            if(obj.password == password.value){
                //login!
                localStorage.setItem("currUser", JSON.stringify({
                    email: email.value,
                    password: password.value,
                    token: generateToken()
                }))
                window.location.href="http://127.0.0.1:5500/shopping_cart_application/profile/index.html";
            }
        }
    }else{
         //please signup
    }
    }
})