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
      <p data-aos="fade-up">Assignment: Create a program built on the concept of binary search</p>
      <hr>
      <p data-aos="zoom-in">My project was super fun, I made a questionaire based on the characters from Spongebob Squarepants and the user had to answer yes or no to the questions I asked. Depending on what they answered, they would be told what Spongebob Character matches them and the image of the character</p>
      ${renderIframe(
        "https://iacs-cs.github.io/binary-search-adam/",
        "Which Spongebob Character Are You?"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}
