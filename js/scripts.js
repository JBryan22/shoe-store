$(document).ready(function(){
  $("#submit").click(function(event){
    var shoeSize = $("#shoe-size").val();
    var color = $("#color").val();
    var delivery = $("input:radio[name=delivery]:checked").val();
    var name = $("#name").val();
    var birthday = $("#birthday").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var email = $("#email").val();
    var fullAddress = address + " " + city + " " + state + " " + zip;

    $("#receipt-name").text(name);
    $("#receipt-size").text(shoeSize);
    $("#receipt-address").text(fullAddress);
    $("#receipt-email").text(email);
    $("#receipt-color").css("background-color", color);
    $("#receipt").toggle();

    event.preventDefault();
  });
});
