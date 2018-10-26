$(document).ready(function(){ 

    $("#formGroupExampleInput").on("click", function(){
        console.log("")
    });

    $("#exampleFormControlSelect1").on("click", function(){
        console.log("")
    });
    

    $("formGroupExampleInput1").on("click", function(){
        console.log("")
    
    });

    $("formGroupExampleInput2").on("click", function(){
        console.log("")
    
    });

    $("formGroupExampleInput3").on("click", function(){
        console.log("")
    
    });
    

    var apiKey= "7ca76b827f864a05a9b30bd1ccf9b78a";

    var searchTerm= "iphone";
    var recordsToRetrieve="2";
    var startYear="2017";
    var endYear="2018";


    var queryURL="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&api-key="+apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

 


// Storing the rating data
var parameters = response.searchTerm;


})
