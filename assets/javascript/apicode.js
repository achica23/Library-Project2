
function queryURL() {
 
 var queryURL = "https://api.nytimes.com/svc/books/v3/lists.json?";

 var queryParams = { "api-key": "eCBC3foQULpuJ7el53IIVfVOjWDGl7cB" };


 queryParams.q = $("#search-term")
   .val()
   .trim();

 }

 // Logging the URL so we have access to it for troubleshooting
 console.log("---------------\nURL: " + queryURL + "\n---------------");
 console.log(queryURL + $.param(queryParams));
 return queryURL + $.param(queryParams);


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

