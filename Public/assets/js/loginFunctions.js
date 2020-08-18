let newUser = () => {
    var newUser = {
      email: $("#uname").val(),
      password: $("#pword").val(),
    };
    console.log(newUser)
    $.post("/api/users", newUser)
  }
  
  let userLogin = (event) => {
    // event.preventDefault();
    var userData = {
      email: $("#uname").val(),
      password: $("#pword").val(),
    };
    if (!userData.email || !userData.password) {
      console.log('email and password dont match');
      alert('email and password dont match');
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    $("#uname").val("");
    $("#pword").val("");
  };
  
  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function (res) {
        console.log(res.id)
        //set userid to local storage
        localStorage.setItem("userID", res.id)
        // $.get("/api/user_data", {
        //     email: res.email,
        //     id: res.id
        // })
        window.location.replace("/create");
      })
      // If there's an error, log the error
      .catch(function (err) {
        console.log(err);
      })
  }

export { newUser, userLogin };
