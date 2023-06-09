function apicalling() {
    $(document).ready(function () {
        $("#signupbtn").click(function () {
            var person = new Object();
            person.name = $('#fname').val(),
                person.email = $('#emailid').val(),
                person.password = $('#password').val(),
                person.confirmpassword = $('#confirmpassword').val()
            $.ajax({
                url: API + REGISTER_URL,
                type: 'POST',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                    storage();
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(message.SIGNUP_ERROR);
                },
                timeout: 5000
            });
        });

    });
};

function loginapi() {
    $(document).ready(function () {
        $("#loginbtn").click(function () {
            var person = new Object();
            person.email = $('#emailid').val(),
                person.password = $('#password').val()
            $.ajax({
                url: API + LOGIN_URL,
                type: 'POST',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                    loginstorage(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(message.LOGIN_ERROR);
                },
                timeout: 5000
            });
        });
    });
};

function forgotpassword() {
    $(document).ready(function () {
        $("#forgotbtn").click(function () {
            var person = new Object();
            person.email = $('#emailid').val()
            $.ajax({
                url: API + FORGOT,
                type: 'POST',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(message.FORGOT_ERROR);
                },
                timeout: 5000
            });
        });
    });
};


function resetpassword() {  
    $(document).ready(function () {
        $("#resetbtn").click(function () {
            var person = new Object();
            const token = window.location.href.split('=')[1];
            person.password = $('#new-password').val(),
                person.confirmPassword = $('#confirm-new-password').val()
                console.log(person);
            $.ajax({
                url: `http://192.168.1.252:4000/api/password/reset/${token}`,
                type: 'PUT',
                dataType: 'json',
                data: person,
                success: function (data, textStatus, xhr) {
                    console.log(data);
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.log(message.RESET_ERROR);
                },
                timeout: 5000
            });
        });
    });
};

