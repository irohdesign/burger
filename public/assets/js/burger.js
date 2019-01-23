$(function() {
    // create new burger
    $("#new-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#insert").val().trim()
        };

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
        var newEaten = $(this).data("newEaten");

        var newStatus = {
            devoured: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(function() {
            console.log("burger got " + newStatus);
            location.reload();
        }
        );
    })

})