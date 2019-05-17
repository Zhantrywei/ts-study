function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
var error = [0, 1, 2];
document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter(error);
