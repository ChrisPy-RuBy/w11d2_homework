
var createCatItem = function() {
    var ulCat = document.createElement('ul');
    ulCat.classList.add("cat")
    return ulCat
}

var createCatName = function(name) {
  var liCatName =  document.createElement('li');
  liCatName.innerText = name
  return liCatName 
}

var createCatFood = function(food) {
  var liCatFood = document.createElement('li');
  liCatFood.innerText = food
  return liCatFood;
}

var createCatImage = function(image) {
  var liCatImage = document.createElement('li');

  var liCatImageDetails = document.createElement('img');
  liCatImageDetails.width =500;
  liCatImageDetails.src = image
  liCatImage.appendChild(liCatImageDetails)
  return liCatImage
}

var appendsElements = function(ulCat, catList, liCatName, liCatFood, liCatImageDetails) {
  ulCat.appendChild(liCatName);
  ulCat.appendChild(liCatFood);
  ulCat.appendChild(liCatImageDetails);
  catList.appendChild(ulCat)
}

var addCat = function(name, food, image) {
  var ulCat = createCatItem();
  var liCatName = createCatName(name);
  var liCatFood = createCatFood(food);
  var liCatImageDetails = createCatImage(image);

  var catList = document.querySelector("#cats")
  appendsElements(ulCat, catList, liCatName, liCatFood, liCatImageDetails);
}

var app = function() {
  addCat("Name: Fluffkins","Food: Mouse Guts",'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg' )
}

//   var ulCat = document.createElement('ul');
//   ulCat.classList.add("cat")
//   console.log("ulcat", ulCat)

//   var liCatName = document.createElement('li');
//   liCatName.innerText = "Name: Lucky"
//   console.log("liCatName", liCatName)

//   var liCatFood = document.createElement('li');
//   liCatFood.innerText = "Food: Mouse guts"
//   console.log("liCatFood", liCatFood)

  var liCatImage = document.createElement('li');
  var liCatImageDetails = document.createElement('img');
  liCatImageDetails.width =500;
  liCatImageDetails.src = 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'


//   var catList = document.querySelector("#cats")

//   liCatImage.appendChild(liCatImageDetails)

//   ulCat.appendChild(liCatName);
//   ulCat.appendChild(liCatFood);
//   ulCat.appendChild(liCatImageDetails);
//   catList.appendChild(ulCat)
// }

window.onload = app;


// <ul class="cat">
//   <li>Name: Boba</li>
//   <li>Favourite food: Sock fluff</li>
//   <li><img width="500" src="http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"></li>
// </ul>

// var app = function () {
//   // create an <article> with class "quote"
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');

// create <blockquote> wth text inside it
//   var blockQuote = document.createElement('blockquote');
//   blockQuote.innerText = "Why not dogs? Why can't dogs come?"
//   console.log(blockQuote)

// // Create a <cite> with text inside it
//   var cite = document.createElement('cite');
//   cite.innerText = "Craig Morton"

//   // put <cite> in the <blockquote>
//   blockQuote.appendChild(cite);

// //  put the <blockquote> in the article
//   quoteArticle.appendChild(blockQuote);]

//   // getting the target element (the exisitng list of quotes)
//   var quoteList = document.querySelector('#quotes');
//   // put the full <article> in the list of quotes
//   quoteList.appendChild(quoteArticle);
//   // what the fuck is this nonesense! blergh
// // }