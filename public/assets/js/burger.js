$(function() {
    // create new burger
    $("#new-burger").on("submit", function(event) {
        event.preventDefault();

        var added = $("#insert").val().trim();
        var newBurger = {
            burger_name: added
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("added burger");
            location.reload();
        });
    });

    // eat a burger
    $(".update-eaten").on("click", function(event) {
        var id= $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(function() {
            console.log("burger was eaten");
            location.reload();
        }
        );
    })

})