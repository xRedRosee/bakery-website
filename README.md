# Sugar & Sweet bakery website

This website is for a bakery called Sugar & Sweet and is created with Vue 3. It is a single paged website.

## Why did I create this website?

I worked on this website to get better at using Vue. I wanted to challenge myself a bit an try out a JavaScript framework.

## Version of Vue

This website is created using Vue 3.2.47.
The reason for this version of Vue and not the LTS Vue 2 is because Vue 2 is only supported till December 2023. So it won't be long till Vue 3 is the LTS version and Vue 2 will be 'outdated'. I think it's better to already start using Vue 3 and not begin with Vue 2.

## Libraries used

- GlideJS for slideshow
- AOS for scroll animations

## How does this website work?

The website is created using vue components. The navigation menu can be found in the NavBar.vue file inside components. This file contains all the HTML, CSS and JavaScript that's used for the navigation menu. To see how our slideshow was made that you see when starting up our website, you need to look inside the HeaderSlideShow.vue file. For the about us block and the make your order now, I created a ColorBlock.vue component. You can change the color and text of these components in App.vue, by changing the props. The different cards that are displayed on the page can be found in ServiceCards.vue and ShowcaseCard.vue. What's inside these cards can be changed in the App.vue as well.
The form on the webpage is created in ContactForm.vue. Here is a function created to open and close the pop up when filling in the form.

## Installation

1. Download the file from Git.
2. Open terminal
3. cd and then the project name
4. Run the following command: npm install
5. Run the following command: npm run dev
6. Have fun!

## Contributors

Iris Roemermann
