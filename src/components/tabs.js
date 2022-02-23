import axios from "axios";
import { get } from "express/lib/response";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const newTopics = document.createElement('div');
  newTopics.classList.add('topics');
  topics.forEach(topicsText => {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = topicsText;
    newTopics.appendChild(newTab);
  }
  )
  return newTopics;
 }
// const newArray = 
axios.get('http://localhost:5000/api/topics').then(resp =>{
  console.log(resp.data);
}).catch(err => {console.log(error);}) ;
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


document.querySelector(selector).appendChild(Tabs());
}

export { Tabs, tabsAppender }
