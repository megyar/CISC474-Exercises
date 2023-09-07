$( document ).ready(function() {
    console.log( "ready!" );

    $("#fname").click(function(){
        $(this).val("");
    });

    $("#lname").click(function(){
        $(this).val("");
    });

    $("#go").on("click", function(event) {
        console.log("click handler");
        var name = $("#fname").val() + " " + $("#lname").val();
        $("#jumbotron").text(name);
        return false;
    });
    return false;
});