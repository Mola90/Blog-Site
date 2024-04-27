const dashboardNav = document.getElementById("dashboard-button");
const homeNav = document.getElementById("home-button");
const loginNav = document.getElementById("login-button");
const signupNav = document.getElementById("signup-button");

dashboardNav.addEventListener("click", function (){
    window.location.href = '/dashboard';
});

homeNav.addEventListener("click", function (){
    window.location.href = '/';
});

loginNav.addEventListener("click", function (){
   var userName = prompt("Pleae enter you user name");

   var password = prompt("Please enter your password");

   alert( "you are logged in" + userName + password);
});

signupNav.addEventListener("click", function(){
    var signupName = prompt("Please choose username");

    var signupPassword = prompt("Please choose a password");

    var signupEmail = prompt("Please enter your email");

    signup(signupName,signupPassword,signupEmail);

});

const loginCall = async function(email,password){

    const response = await fetch('/api/user/login', {
        method: 'GET',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok){
        alert( "you are now logged in")
      }else{
        alert("Log in failed");
      }

}

 async function signup(username,password,email){

    const response = await fetch('/api/user/sign-up', {
        method: 'POST',
        body: JSON.stringify({ email, password, username }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok){
        alert( "you are now signed up")
      }else{
        alert("sign up failed");
      }

}

const postComment = async function(User, Blog, comment){

    const response = await fetch('/api/user/login', {
        method: 'Post',
        body: JSON.stringify({ User,Blog, comment}),
        headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok){
        alert( "you are now logged in")
      }else{
        alert("Log in failed");
      }

}

// const deleteCommnent = async function(User, Blog, comment){

//     const response = await fetch('/api/user/login', {
//         method: 'DELETE',
//         body: JSON.stringify({ User,Blog, comment}),
//         headers: { 'Content-Type': 'application/json'},
//       });

//       if (response.ok){
//         alert( "you are now logged in")
//       }else{
//         alert("Log in failed");
//       }

// }

const deleteBlog = async function(User, Blog, comment){

    const response = await fetch('/api/user/login', {
        method: 'DELETE',
        body: JSON.stringify({ User,Blog, comment}),
        headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok){
        alert( "you are now logged in")
      }else{
        alert("Log in failed");
      }

}

async function  PostBlog(){
    
    const response = await fetch('/api/user/login', {
        method: 'Post',
        body: JSON.stringify({ User,Blog, comment}),
        headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok){
        alert( "you are now logged in")
      }else{
        alert("Log in failed");
      }

}

 async function callLogot (User, Blog, comment){

    const response = await fetch('/api/user/login', {
        method: 'DELETE',
        body: JSON.stringify({ User,Blog, comment}),
        headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok){
        alert( "you are now logged in")
      }else{
        alert("Log in failed");
      }

}



