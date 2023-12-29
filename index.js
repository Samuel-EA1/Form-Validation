const userName = document.getElementById("user-name");
const password1 = document.getElementById("pass1");
const password2 = document.getElementById("pass2")
const errorMessage = document.getElementById("error-message");
const error1 = document.getElementById("error_message1");
const error2 = document.getElementById("error-message2");
const myForm = document.getElementById("form");
const myHeading = document.getElementById("myHeading");
const registerHeader= document.getElementById("registerID");
const welcomeBack = document.getElementById("welcome");
const clearBtn = document.getElementById("clear-Btn");
let registered = false;
let cleared = false;

function formSubmit(event) {
    event.preventDefault()
     if (passwordConfirmHandler() == false || confirmUsername() == false || passwordCharCheck() == false){
        alert("Password does not match.");
        return;
   }

//    Save username to local storage
   localStorage.setItem("username", `${userName.value}`)
   registered = true; 

   if(registered){
     
    window.location.reload();
}
}

   const localStorageItem = localStorage.getItem("username");
    if (localStorageItem){
    myForm.style.display = "none";
    myHeading.style.display = "none";
    registerHeader.innerText = "Dashboard";
    // welcomeBack.innerHTML = "Welcome back" +" " + "@" + " " + localStorageItem;
    welcomeBack.innerText = `Welcome @${localStorageItem}`;
    clearBtn.style.display = "block";
   
    }
function clearStorage(){
    
    localStorage.clear();
    cleared = true
    if(cleared){
        
        window.location.reload();
    }
}
function confirmUsername(){
    if(userName.value.includes(" ")){
      userName .style.borderColor = "red";
      return false;
    }
    if(userName.value === ""){
        userName.style.borderColor = "white";
        userName.style.borderBottomColor = "black";
        return false;
    }
    if(userName.value.length >= 16){
      error1.style.display = "block";
      userName .style.borderColor = "red";
      return false;
    }
    else{
        error1.style.display = "none";
    }
}

function passwordCharCheck(){
    if(password1.value.length < 8){
        error2.style.display = "block";
        return false
    }
    else {
      error2.style.display = "none";
    }
}

function passwordConfirmHandler(){
    if(password1.value !== password2.value){
        password2.style.borderColor = "red";
        errorMessage.style.display = "block";
        return false;
    }
    else {
        errorMessage.style.display = "none";
        password2.style.borderBottomColor = "black";
    }
   
}