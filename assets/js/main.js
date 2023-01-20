



const loginBtn = document.querySelector("#login_btn");


loginBtn.addEventListener("click", () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value; 




    if(password.length <= 8 ){
        document.querySelector("#content").innerHTML = `Şifrə 8 simvoldan kiçik olamamalıdır`;
        document.getElementById("content").style.color = "red"
    }else{
        let userData = {
            name:username,
            password:password
        }
        localStorage.setItem("users",JSON.stringify(userData));
    }

    if(username.trim() == "" || password.trim() == ""){

        document.querySelector("#content").innerHTML = `adınız və ya şifəriniz uyğun deyil`;
        document.getElementById("content").style.color = "red";
        
    } 
    
    document.querySelector("#username").value= ""
    document.querySelector("#password").value= ""

    

    // console.log(`ad: ${username} - sifre: ${password}`);

})


