let form = document.querySelector("form");

form.addEventListener("submit" , function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(ipss.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);



});