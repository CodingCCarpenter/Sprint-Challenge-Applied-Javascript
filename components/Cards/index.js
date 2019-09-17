// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//variables
const cardsContainer = document.querySelector('.cards-container');

//axios request
axios.get('https://lambda-times-backend.herokuapp.com/articles').then((res) => {
    //log results and study
    console.log(res);
    //access articles
    Object.keys(res.data.articles).forEach((category) => {
        res['data']['articles'][category].forEach((article) => {
        cardsContainer.appendChild(cardCreator(article))
        })
    })
})
.catch((err) => {
    console.log(err);
})

const cardCreator = (data) => {
    //variables
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const authorSpan = document.createElement('span');

    //assign classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    img.classList.add('img');
    authorSpan.classList.add('author-span');

    //text content
    headlineDiv.textContent = data['headline'];
    authorSpan.textContent = `By ${data['authorName']}`;

    //img src
    img.src = data['authorPhoto'];

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorSpan);
    imgDiv.appendChild(img);

    return cardDiv;


}