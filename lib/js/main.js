//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var thename = $("#name").val();
    var newMessage = $("#message").val();
    console.log(thename + " : " + message);

    //Update database here
    var value = {name: thename, message: newMessage};
    database.push(value);
}

database.on("child_added", function(rowData){
    console.log(rowData.val());
    var name = rowData.val().name;
    var message = rowData.val().message;
    var html = "<p>" + name + ": " + message + "</p>"
    $(".allMessages").append(html);
})