/*global $*/

$(document).ready(function(){
    $('#login-form [type="submit"]').on('click', function() {
        $.post('index.php?page=login', $('#login-form').serialize()).done(function(response) {
            console.log("response =", typeof response);    
            if (typeof response.success !== 'undefined') {
                window.location.href = "index.php?page=admin";
            }
            else {
                $('<div class="error">Dispari</div>').insertBefore("#login-form");
                setTimeout(function() {
                    $(".error").remove();    
                }, 5000);
            }
        });
    });
});