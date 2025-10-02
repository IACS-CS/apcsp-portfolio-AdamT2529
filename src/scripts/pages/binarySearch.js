// src/scripts/pages/binarySearch.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderBinarySearch() {
  /* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1 data-aos="fade-up">Binary Search Project</h1>    
    ${renderMenu()}
    <article>
      <p>Assignment: Create a program built on the concept of binary search</p>
      <hr>
      <p data-aos="fade-in">My project was super fun, I worked hard on it!</p>
      ${renderIframe(
        "https://iacs-cs.github.io/binary-search-adam/",
        "Which Spongebob Character Are You?"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}
