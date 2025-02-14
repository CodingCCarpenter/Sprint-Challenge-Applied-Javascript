// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//variable
const topics = document.querySelector('.topics');

//axius request
axios.get('https://lambda-times-backend.herokuapp.com/topics').then((res) => {
    //console.log reults and review object
    console.log(res.data);

    //iterate over topics/Tab component
    res.data.topics.forEach((topic) =>{
        let tabDiv = document.createElement('div');
        tabDiv.classList.add('tab');
        tabDiv.textContent = topic;
        topics.appendChild(tabDiv);
    })
})
.catch((err) => {
    console.log(err);
})