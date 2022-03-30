'use strict';

{
  // A template class for sliders
  class Slider {
    constructor(id, mediaQuery) {
      // Get HTML elements
      this.slider = document.querySelector(`#${id}`);
      this.sliderList = this.slider.querySelector('.slider-list');
      this.sliderItems = this.slider.querySelectorAll('.slider-item');
      this.sliderNext = this.slider.querySelector('.slider-arrow-next');
      this.sliderPrev = this.slider.querySelector('.slider-arrow-prev');
      this.mediaQueryList = [
        window.matchMedia(`screen and (max-width:${mediaQuery[0] - 1}px)`),
      ];
      mediaQuery.forEach((item) => {
        this.mediaQueryList.push(
          window.matchMedia(`screen and (min-width:${item}px)`)
        );
      });
      // Define global variables
      this.numberOfItems;
      this.itemIndex;
      this.flag = true;
    }

    // Handel number of slides and set slides width + event listeners
    run() {
      this.mediaQueryList.forEach((mediaQuery, index) => {
        if (mediaQuery.matches) {
          this.numberOfItems = index + 1;
          this.itemIndex = 0;
          this.sliderItems.forEach((item) => {
            item.style.width = `${100 / this.numberOfItems}%`;
          });
        }
      });

      // Run displayItems function
      this.displayItems();

      // Event listeners
      if (this.flag === true) {
        // Add listener to media-queries to call the run function again when screen resized
        this.mediaQueryList.forEach((mediaQuery) => {
          mediaQuery.addEventListener('change', () => {
            this.run();
          });
        });

        // Display next slide
        this.sliderNext.addEventListener('click', () => {
          if (this.itemIndex < this.sliderItems.length - this.numberOfItems) {
            this.itemIndex++;
            this.displayItems();
          }
        });

        // Display Previous slide
        this.sliderPrev.addEventListener('click', () => {
          if (this.itemIndex > 0) {
            this.itemIndex--;
            this.displayItems();
          }
        });

        // Prevent adding event listener each time run function called
        this.flag = false;
      }
    }

    // Display slider items
    displayItems() {
      let html = '';
      let len = this.itemIndex + this.numberOfItems;
      for (let i = this.itemIndex; i < len; i++) {
        html += this.sliderItems[i].outerHTML;
      }
      this.sliderList.innerHTML = html;
    }
  }

  /* 
  Note about creating new slider:
  First parameter is the id of the HTML slider-container element of each slider.
  Second parameter is an array of the media queries (breaking points) where the number of slides increases.
  */

  // Create a new slider and run it
  new Slider('new-products', [576, 992]).run();

  // Create a new slider and run it
  new Slider('featured-products', [576, 768, 992]).run();
}
