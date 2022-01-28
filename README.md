# Airpods-Pro-Animation-Only

This consists of the airpods pro scrolling video animation and \
the loading animation I used in my Apple Airpods Pro website. \

## Airpods Pro Scrolling Video animation

I referenced [this site](https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/) to create the animation \
Basically this uses a Canvas element, and there are frames of \
the animation available on the web, so we're using those to draw \
the video on canvas

## Loading Animation

This one is pretty simple. What I'm doing is that, I'm putting \
every words of the loading text into a span, and in the css I'm \
doing a blurring keyframe animation on each of them sequentially. \
Meaning that the first span starts from 0s and goes on 1.2s, second \
starts from 0.2s and goes on 1.2s, and it continues.
