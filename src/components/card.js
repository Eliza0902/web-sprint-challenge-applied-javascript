import axios from "axios";


const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  const newHeadline = document.createElement('div');
  newHeadline.classList.add('headline');
  newHeadline.textContent = article.headline;
  const newAuthor = document.createElement('div');
  newAuthor.classList.add('author');
  const newAuthorImg = document.createElement('div')
  newAuthorImg.classList.add('img-container');
  const newImg = document.createElement('img');
  newImg.src = article.authorPhoto;
  const newAuthorName = document.createElement('span');
  newAuthorName.textContent = article.authorName;

  newAuthorImg.appendChild(newImg);
  newAuthor.appendChild(newAuthorImg);
  newAuthor.appendChild(newAuthorName);
  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  return newCard;

}
axios.get('http://localhost:5000/api/articles').then(resp =>{
  console.log(Card(resp.data.articles.node[0]));
 }).catch(err => {console.log('error');})
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.javascript[0]));
   }).catch(err => {console.log('error');})
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.javascript[1]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.javascript[2]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.javascript[3]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.bootstrap[0]));
}).catch(err => {console.log('error');});
axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.bootstrap[1]));
}).catch(err => {console.log('error');});
axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.bootstrap[2]));
}).catch(err => {console.log('error');});
axios.get('http://localhost:5000/api/articles').then(resp =>{
  document.querySelector(selector).appendChild(Card(resp.data.articles.technology[0]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.technology[1]));
     }).catch(err => {console.log('error');});
     axios.get('http://localhost:5000/api/articles').then(resp =>{
  document.querySelector(selector).appendChild(Card(resp.data.articles.technology[2]));
   }).catch(err => {console.log('error');});  
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.jquery[0]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.jquery[1]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.jquery[2]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.node[0]));
   }).catch(err => {console.log('error');});
   axios.get('http://localhost:5000/api/articles').then(resp =>{
    document.querySelector(selector).appendChild(Card(resp.data.articles.node[1]));
   }).catch(err => {console.log('error');})
}

export { Card, cardAppender }
