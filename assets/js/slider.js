"use strict";

{
  // Get HTML elements
  const sliderList = document.querySelector(".slider-list");
  const sliderItems = document.querySelectorAll(".slider-item");
  const sliderNext = document.querySelector(".slider-arrow-next");
  const sliderPrev = document.querySelector(".slider-arrow-prev");

  // Define variables
  let numberOfItems;
  let itemIndex;

  // Define media queries
  const mediaQueryList = [
    window.matchMedia("(max-width: 650px)"),
    window.matchMedia("(max-width: 991px)"),
  ];

  // Display slider items
  const displayItems = () => {
    let html = "";
    let len = itemIndex + numberOfItems;
    for (let i = itemIndex; i < len; i++) {
      html += sliderItems[i].outerHTML;
    }
    sliderList.innerHTML = html;
  };

  // Handel number of slides and set slides height and width
  const HandleScreen = () => {
    if (mediaQueryList[0].matches) {
      numberOfItems = 1;
      itemIndex = 0;
      // set width and height to item for when image does not load
      sliderItems.forEach((item) => {
        item.style.width = "100%";
        item.style.minHeight = "150px";
      });
    } else if (mediaQueryList[1].matches) {
      numberOfItems = 2;
      itemIndex = 0;
      // set width and height to item for when image does not load
      sliderItems.forEach((item) => {
        item.style.width = "50%";
        item.style.minHeight = "150px";
      });
    } else {
      numberOfItems = 3;
      itemIndex = 0;
      // set width and height to item for when image does not load
      sliderItems.forEach((item) => {
        item.style.width = "35%";
        item.style.minHeight = "150px";
      });
    }
    displayItems();
  };

  // Run handel screen function for the first time
  HandleScreen();

  // Add listener to media query list items
  for (let i = 0; i < mediaQueryList.length; i++) {
    mediaQueryList[i].addListener(HandleScreen);
  }

  // Diplay next slide
  sliderNext.addEventListener("click", function () {
    if (itemIndex < sliderItems.length - numberOfItems) {
      itemIndex++;
      displayItems();
    }
  });

  // Display Previous slide
  sliderPrev.addEventListener("click", function () {
    if (itemIndex > 0) {
      itemIndex--;
      displayItems();
    }
  });
}
