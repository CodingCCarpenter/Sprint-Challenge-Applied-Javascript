/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//grab div to manipulate for carousel
const carouselContainer = document.querySelector('.carousel-container');

const carouselCreator = (images) => {

  //create variables
  const carousel = document.createElement('div');
  const changingImage = document.createElement('img');
  // const mountains = document.createElement('img');
  // const computer = document.createElement('img');
  // const trees = document.createElement('img');
  // const turntable = document.createElement('img');
  const backButton = document.createElement('div');
  const forwardButton = document.createElement('div');
  
  //button event listener variables
  let count = 0;
  const images = ['.assets/carousel/mountains.jpeg', '.assets/carousel/computer.jpeg', '.assets/carousel/trees.jpeg', '.assets/carousel/turntable.src'];

  //assign classes
  carousel.classList.add('carousel');
  // mountains.classList.add('mountains');
  // computer.classList.add('computer');
  // trees.classList.add('trees');
  // turntable.classList.add('turntable');
  backButton.classList.add('left-button');
  forwardButton.classList.add('right-button');

  // //img src
  // mountains.src = '.assets/carousel/mountains.jpeg';
  // computer.src = '.assets/carousel/computer.jpeg';
  // trees.src = '.assets/carousel/trees.jpeg';
  // turntable.src = '.assets/carousel/turntable.src';

  //button content
  backButton.textContent = '<';
  forwardButton.textContent = '>';

  //back button event
  backButton.addEventListener('click', (event) => {
  
    if(count == 4){
      changingImage.src =  images[0];
      current = 0;
    } else{
      changingImage.src = images[count];
      count += 1;
    }
  })

  forwardButton.addEventListener('click', (event) => {
    if(count == 0){
      images.src = images[3];
      count = 3;
    }else {
      images.src = images[count];
      count -= 1;
    }
  })

  carousel.appendChild(backButton);
  carousel.appendChild(changingImage);
  carousel.appendChild(forwardButton);
}

carouselContainer.appendChild(carouselCreator(images));