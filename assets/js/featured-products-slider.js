'use strict';

{

// Get HTML elements
const sliderList = document.querySelector('#featured-product .slider-list');
const sliderItems = document.querySelectorAll('#featured-product .slider-item');
const sliderNext = document.querySelector('#featured-product .slider-arrow-next');
const sliderPrev = document.querySelector('#featured-product .slider-arrow-prev');

// Define variables
let itemIndex = 0;
let numberOfItems;
const mediaQueryList = [
  window.matchMedia('(max-width: 575px)'),
  window.matchMedia('(max-width: 991px)'),
  window.matchMedia('(max-width: 1199px)')
];

// Display slider items
const displayItems = () => {
  let html = '';
  for(let i = itemIndex; i < itemIndex + numberOfItems; i++) {
    html += sliderItems[i].outerHTML;
  }
  sliderList.innerHTML = html;
};

// Handel number of images base on device size
const HandleScreen = () => {
  if(mediaQueryList[0].matches) {numberOfItems = 1;}
  else if(mediaQueryList[1].matches) {numberOfItems = 2;}
  else if(mediaQueryList[2].matches) {numberOfItems = 3;}
  else {numberOfItems = 4;}
  displayItems();
};

// Run handel screen function for the first time
HandleScreen();

// Add listener to media query list items
for(let i = 0; i < mediaQueryList.length; i++) {
  mediaQueryList[i].addListener(HandleScreen);
}

// Diplay next slide
sliderNext.addEventListener('click', function() {
  if (itemIndex < sliderItems.length - numberOfItems){
    itemIndex++;
    displayItems();
  }
});

// Display Previous slide
sliderPrev.addEventListener('click', function() {
  if (itemIndex > 0){
    itemIndex--;
    displayItems();
  }
});

}
