function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
let error = [0,1,2];

document.body.innerHTML = greeter(user);
document.body.innerHTML = greeter(error);