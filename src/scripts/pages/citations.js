import { renderMenu } from "../utils/renderMenu";

export function renderCitations() {
  /* html */
  return `
  <h1 data-aos="fade-up">Citations</h1>
    ${renderMenu()}
    <p>Initial template from my teacher Mr. Hinkle</p>
    <p>Used Copilot to help with making dark and light mode button, citations page </p>
    <p>(Used AOS - Animate On Scroll library)</p>
    <p>(later fill in media citations)</p>
  `;
}
