import {renderMenu} from '../utils/renderMenu.js';
import {renderIframe} from '../utils/renderIframe.js';

export function renderImageFilter() {
  /* html */
  return `
    <!-- code generated in imageFilter.js -->
    <h1 data-aos="fade-up">Image Filter Project</h1>
    ${renderMenu()}
    <article>
      <p data-aos="fade-up">Assignment: Create a program that applies filters to images using JavaScript and HTML canvas.</p>
      <hr>
      <p data-aos="zoom-in">Description of the Image Filter project goes here. You can talk about the different filters you implemented, how users can interact with the program, and any challenges you faced while creating it.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/image-filter-project-adamt/",
        "Image Filter Project",
      )} 
    </article>
    <!-- end code generated in imageFilter.js -->
  `;
}
   
