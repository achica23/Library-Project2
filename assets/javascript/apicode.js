$(document).ready(function(){
//console.log("help")

  var queryURL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=eCBC3foQULpuJ7el53IIVfVOjWDGl7cB";
  //console.log("it works")
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function random(res){
    console.log("random word")
    var results = res.results
    for (let i = 0; i < res.results.length; i++){
     let books = $("<div class=\bookDiv\>")
    

     var author = results[i].author;
     var publisher = results[i].publisher;
     var publishDate = results[i].published_date;
     var genre = results[i].list_name;
     var description = results[i].description;
     var title = results[i].title;
    
    $("<div>").attr("class", "card")//for image
    $("<div>").attr("class", "card-body")//for text
    $("<div>").attr("class", "card-text")//description
    $("<div>").attr("class", "genre")//genre
    $("<img>").attr()//for image url 
    $("<h4>").attr()//title of book database
    $("<p>").attr()//genre of book from database 

     books.append(author);
     books.append(publisher);
     books.append(publishDate);
     books.append(genre);
     books.append(description);
     books.append(title);
  
     $(".bookDiv").append(books);
    
    }
    return books
    // console.log(random())
  });
  console.log(random())
  var fun = random()

  $(document).on("click", ".searchbar", function(userEntry) {
    if (userEntry === fun){
      let books = $("<div class=\bookDiv\>")
    }
  })

  
//   app.get("/", function(req, res) {
//     connection.query("SELECT * FROM books_DB", function(err, result) {
//         if (err) throw err;

//         let html = '<div class="card1" style="width: 15rem;">';

//         html += "<ul>";

//         for (let i = 0; i < result.length; i++) {
//             html += "<li><p>: " + result[i].id + "</p>";
//             html += "<p>: " + result[i].cool_points + "</p>";
//         }

//         html += "</ul>";

//         res.send(html);
//     });
// });

  $.ajax({
    type: "POST",
    url: queryURL,
    data: data,
  
  });


});
