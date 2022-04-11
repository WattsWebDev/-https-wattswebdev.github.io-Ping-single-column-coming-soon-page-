# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

(ping.PNG)

### Links

- Solution URL: [https://github.com/WattsWebDev/Ping-single-column-coming-soon-page-/tree/main]
- Live Site URL: [https://wattswebdev.github.io/Ping-single-column-coming-soon-page-/]

## My process

I started this project with budilgin the structe with the HTML. I then added in the CSS and the JavaScript to make create the form validation.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I learned how to authenticate a email address using JavaScript.

To see how you can add code snippets, see below:

```html
  <div class="form">
      <input type="email" id='email' name="email" placeholder="Your email address..."/>
      <button id="button">Notify Me</button>
      <p id="inputBox"></p>
    </div>
```

```css
#inputBox {
    font-size: 1rem;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1%;
   }

```js
   text.innerHTML="Thank you for subscribing to our newsletter!";
      text.style.color = 'green';
      input.style.borderColor = 'green';
    }else{
      text.innerHTML="Please enter a valid email address.";
      text.style.color = 'red';
      input.style.borderColor = 'red';
}
```

### Continued development

Next I want to learn how to validate a whole form as well as build my CSS skills to design exact designs of webpages. I also want to continue learning JavaScipt and how to manipulate the DOM.

### Useful resources

- [CodePen](https://codepen.io/saigowthamr/pen/bGGzGoZ) - This codepen helped to understand regexp as well as how to use JS to validate forms.
- [w3Schools.coom](https://www.w3schools.com/js/js_htmldom_css.asp) -This webpages helped me to undesratd styling using the DOM.

## Author

- Website - [Jakia Watts](https://wattswebdev.github.io/my-portfolio/)
- Frontend Mentor - [@WattsWebDev](https://www.frontendmentor.io/profile/WattsWebDev)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
