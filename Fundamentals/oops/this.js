
function User(username,loginCount,isLoggedIn){

    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne = new User("krishna","5","true")
const userTwo = new User("ray",6,false)
console.log(userTwo);

