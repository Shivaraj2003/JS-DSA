class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(this.email, 'just logged in');
    }

    logout()
    {
        console.log(this.email, 'just logged out');    
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('abc@1234','Shivaraj');
var userTwo = new User('xyz@1234','Muneef');

var admin = new Admin('war@gmail.com','qspider');

userOne.login();
userTwo.logout();

var users = [userOne, userTwo, admin];
admin.login();
admin.deleteUser(userOne);
console.log(User);

