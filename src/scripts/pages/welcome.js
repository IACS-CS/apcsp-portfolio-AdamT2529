// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1 data-aos="fade-up">Adam's Portfolio</h1>
    ${renderMenu()}
    <h2 data-aos="zoom-in-up">About Me</h2>
    <p data-aos="fade-in">I am a student at IACS. I am taking the class of AP Computer Science Principles and this website consists of my favorite work I have created in this course.</p>
    <!-- an example image: Notice that images live in public/ -->
    <img src="./example-circle.jpeg" class="small-image">
    <img src="./IACS.jpeg" class="small-image">

    <!-- end code generated in welcome.js -->
  `;
}
