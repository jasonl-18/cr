$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://7ihjggev1a.execute-api.us-east-1.amazonaws.com/Prod/updateviewCount",
        crossDomain: true,
        contentType: "application/json",
        success: function(result){
            console.log(result);
        },
        error: function(error){
            console.log("error")
            console.log(error);
        }

    }).done(function (result) {
        $("#views").append(result);
    })
    
})
