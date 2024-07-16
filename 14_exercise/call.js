function SetUserName(user){
    this.user = user;
}

function CreateUser(user,email,password){
    SetUserName(user)
    this.email = email;
    this.user = user;
    this.password = password;
}

const chai = new CreateUser("ajay","sdfhksd@gamial","123")
console.log(chai);