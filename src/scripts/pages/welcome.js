// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1 data-aos="fade-up">Adam Tran's Portfolio</h1>
    ${renderMenu()}
    <h2 data-aos="zoom-in-up">About Me</h2>
    <p data-aos="fade-in">All About me...</p>
    <!-- an example image: Notice that images live in public/ -->
    <img src="./example-circle.svg" alt="A blue circle" >

    <!-- end code generated in welcome.js -->
  `;
}
