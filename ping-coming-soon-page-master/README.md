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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![desktop screenshot](./desktop_screenshot.png)
![mobile screenshot](./mobile_screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JS

### What I learned

- use regular expression to check email format.

```js
const notifyButton = document.querySelector(".notify button");

const emailInput = document.querySelector(".notify input");
const result = document.querySelector(".notify > span");
const info = document.querySelector(".notify span span");
notifyButton.addEventListener("click", (e) => {
  const emailContent = emailInput.value;
  const reg = /\w+@\w+\.com/;
  if (reg.test(emailContent)) {
    result.classList.add("sucessful");
    info.textContent = "Successful!";
  } else {
    result.classList.add("fail");
    info.textContent = "Please provide a valid email address!";
  }
});
```

### Continued development

-The SVG image did not achieve the expected effect.

### Useful resources

- [regular expressions](https://javascript.info/regular-expressions) a good tutorial for javascript regular expressions.

## Author

- Frontend Mentor - [@perterhuan](https://www.frontendmentor.io/profile/perterhuan)

## Acknowledgments
