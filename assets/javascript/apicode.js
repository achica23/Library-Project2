$(document).ready(function(){
//console.log("help")



  //let key = "eCBC3foQULpuJ7el53IIVfVOjWDGl7cB"
  var queryURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=eCBC3foQULpuJ7el53IIVfVOjWDGl7cB";
  //console.log("it works")
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(res){
    //console.log(res)
    const results = res.results
    for (let i = 0; i < res.results.length; i++){
      let books = $("<div class=\bookDiv\>")
      var author = results[i].author;
     var publisher = results[i].publisher;
     var publishDate = results[i].published_date;
     var genre = results[i].list_name;
     var description = results[i].description;
     var title = results[i].title;
  
     books.append(author);
     books.append(publisher);
     books.append(publishDate);
     books.append(genre);
     books.append(description);
     books.append(title);
  
     $(".bookDiv").append(books);
    
    }
  
  })




// function queryURL() {
 
 

//  var queryParams = { "api-key": "eCBC3foQULpuJ7el53IIVfVOjWDGl7cB" };


//  queryParams.q = $("#search-term")
//    .val()
//    .trim();

//  }

 // Logging the URL so we have access to it for troubleshooting
//  console.log("---------------\nURL: " + queryURL + "\n---------------");
//  console.log(queryURL + $.param(queryParams));
//  return queryURL + $.param(queryParams);


function updatePage(NYTData) {
 
 var numBooks = $("#book-count").val();

 // Log the NYTData to console, where it will show up as an object
 console.log(NYTData);
 console.log("------------------------------------");

 // Loop through the search results
 for (var i = 0; i < numBooks; i++) {
   //Book data
   var book = NYTData.response.docs[i];

   // Increase the articleCount
   var bookCount = i + 1;

   // Create the  list for search results
   var $bookList = $("<ul>");
   $bookList.addClass("list-group");


   // Info that we want from the api
   var author = book.author;
   var publisher = book.publisher;
   var publishDate = book.published_date;
   var genre = book.list_name;
   var description = book.description;
   var title = book.title;


 }
}

})