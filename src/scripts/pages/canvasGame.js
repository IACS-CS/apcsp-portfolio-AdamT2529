import { renderMenu } from "../utils/renderMenu";
import { renderIframe } from "../utils/renderIframe";
export function renderCanvasGame() {
  /* html */
  return `
    <h1 data-aos="fade-up">Canvas Game Project</h1>
    ${renderMenu()}
    <article>
      <p data-aos="fade-up">Assignment: Create a game using the HTML canvas element and JavaScript</p>
      <hr>
      <p data-aos="zoom-in">Description of the game goes here. You can talk about the mechanics, the inspiration behind it, and any challenges you faced while creating it.</p>
      <!-- You can also include an iframe or a link to the game if it's hosted online -->
    </article>
  `;
}
