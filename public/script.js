$(document).ready(function() {
    $('.submit').click(function() {
        let username = ($('#uname').val());
        let password = ($('#pword').val());

        alert(username + ": " + password);
    });

    $('#new-card').click(function() {
        alert('New card coming up!')
    })

    $('#save-card').click(function() {
        alert('Adding to your deck!')
    })
});