# Responsive Product Carousel (Slider)

This is a responsive product carousel (slider) built from scratch without any framework or library (just vanilla HTML, CSS, and JavaScript). It has few lines of code so is lightweight and fast. I used a class that you can create as many sliders as you want on a single webpage from it. All used images are free to use and from [Unsplash](https://unsplash.com/).

## How to Use It

First, download the repository. Then, do the next steps.

### HTML Part

In the **index.html** file of **this repository root folder**, you can find, edit, or add slider's HTML codes.

Just copy and paste the `div` tag with `slider-container` class attribute value and change it's `id` attribute value to your suitable one.

Each `li` tag with the class of `slider-item` is a single slide. You can add more slides, remove some of them, and edit slide (`slide-link-url`, `slide-image-file-url`, and `image alternative text`) as you wish.

#### Sample code:

```
<div class="slider-container" id="sample-slider">
  <div class="slides-wrapper">
    <div class="slides-container">
      <ul class="slider-list">
        <li class="slider-item">
          <a href="slide-link-url">
            <img src="slide-image-file-url" alt="image alternative text" />
          </a>
        </li>
        <li class="slider-item">
          <a href="slide-link-url">
            <img src="slide-image-file-url" alt="image alternative text" />
          </a>
        </li>
        <li class="slider-item">
          <a href="slide-link-url">
            <img src="slide-image-file-url" alt="image alternative text" />
          </a>
        </li>
        <li class="slider-item">
          <a href="slide-link-url">
            <img src="slide-image-file-url" alt="image alternative text" />
          </a>
        </li>
        <li class="slider-item">
          <a href="slide-link-url">
            <img src="slide-image-file-url" alt="image alternative text" />
          </a>
        </li>
        <li class="slider-item">
          <a href="slide-link-url">
            <img src="slide-image-file-url" alt="image alternative text" />
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="slider-arrows">
    <button type="button" class="slider-arrow-prev">Prev</button>
    <button type="button" class="slider-arrow-next">Next</button>
  </div>
</div>
```

### JavaScript Part

In **this repository** > **assets** > **js** > **slider.js** file, do the below step.

For creating each new slider, at the bottom of the codes before `}`, add the below line of code and change the values (or just edit the present codes):

```
new Slider('sample-slider', [576, 768, 992]).run();
```

Instead of `sample-slider`, write your `slider-container` div tag `id` that you entered on the HTML part before.

The `[576, 768, 992]` is an array of the media queries (breaking points) where the number of displayed slides at the same time, increases. Change it as needed.

Save files. That's it! You created a new slider.
