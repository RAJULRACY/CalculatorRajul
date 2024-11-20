function login(){
  
    //store the username //it ouly store temporay 
    const username=usernameInput.value
    console.log(username);

    //storing data permentaly
    localStorage.setItem("username",username)

    //Redirect to dashboard
    window.location="dashbord.html"
}