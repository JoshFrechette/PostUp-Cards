
let logInBut = () => {
    $("#login").on("click", function () {
        console.log("working")
        location.replace("http://localhost:8000/login");
    });
}

let createBut = () => {
    $("#create-button").on("click", function () {
        console.log("working")
        location.replace("/create");
    });
}

let signUpBut = () => {
    $("#signup").on("click", function () {
        console.log("working");
        location.replace("/signup");
    });
}

export { signUpBut, createBut, logInBut }