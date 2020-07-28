let newUser = () => {
    var newUser = {
        email: $("#uname").val(),
        password: $("#pword").val(),
    };
    console.log(newUser)
    $.post("/api/users", newUser)
}

// let userLogin = () => {
//     console.log("logging in via functions page");
//     var newLogin = {
//         email: $("#uname").val(),
//         password: $("#pword").val(),
//     };
//     $.get("/api/users", newLogin)
// }

let userLogin = () => {
    event.preventDefault();
    var userData = {
        email: $("#uname").val(),
        password: $("#pword").val(),
    };
    console.log(userData)
    if (!userData.email || !userData.password) {
    console.log('email and password dont match')
        return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
};

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(email, password) {
    $.post("/api/login", {
        email: email,
        password: password
    })
        .then(function () {
            window.location.replace("/create");
            // If there's an error, log the error
        })
        .catch(function (err) {
            console.log(err);
        });
}

export { newUser, userLogin };
