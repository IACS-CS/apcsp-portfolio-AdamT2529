import { renderMenu } from "../utils/renderMenu";

export function renderCitations() {
  /* html */
  return `
  <h1 data-aos="fade-up">Citations</h1>
    ${renderMenu()}
    <p data-aos="fade-in">Initial template from my teacher Mr. Hinkle</p>
    <p data-aos="fade-in">Used Copilot to help with making toggle dark and light mode button, citations page, and template for this website </p>
    <p data-aos="fade-in">(Used AOS - Animate On Scroll library)</p>
  `;
}
