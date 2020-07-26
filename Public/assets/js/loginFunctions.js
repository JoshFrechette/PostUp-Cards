let newUser = () => {
    var newUser = {
        username: $("#uname").val(),
        password: $("#pword").val(),
    };
    $.post("/api/users", newUser)
}

export { newUser };