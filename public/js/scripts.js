/*global $*/

$(document).ready(function(){
    $(".admin-menu").on('click', function(e){
        $("#admin-content").load("admin_content.php #"+$(this).attr("id"));
        e.preventDefault();
    });
});

$(document).ready(function(){
    $(".a").on('click', function(e){
        $("#admin-content").load("index.php?page=articles");
        e.preventDefault();
    });
});