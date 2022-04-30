const userInput = document.getElementById("username");
const passInput = document.getElementById("password")
userInput.value = localStorage.getItem("usrname");
userInput.value = localStorage.getItem("password");

userInput.addEventListener("input", (e)=>{
    console.log(userInput.value);
    localStorage.setItem("usrname", userInput.value);
});
passInput.addEventListener("input", (e)=> {
    console.log(passInput.value);
    localStorage.setItem("password", passInput.value)
})
function resetBtn(){
    localStorage.clear();
    userInput.value="";
    passInput.value="";
}
function loginBtn(){
    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password");

    if(userInput.value == "Farid" && passInput.value =="12345"){
        window.location.href = "./quiz.html"
    }else{
        alert("Your username or password incorrect")
    }
}