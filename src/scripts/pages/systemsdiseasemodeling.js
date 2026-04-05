import { renderMenu } from "../utils/renderMenu";
import { renderIframe } from "../utils/renderIframe";
export function renderSystemsDiseaseModeling() {
  /* html */
  return `
    <h1 data-aos="fade-up">Systems Disease Modeling Project</h1>
    ${renderMenu()}
    <article>
      <p data-aos="fade-up">Assignment: Create a program that models the spread of a disease using JavaScript and HTML canvas.</p>
      <hr>
      <p data-aos="zoom-in">Description of the Systems Disease Modeling project goes here. You can talk about the different factors you included in your model, how users can interact with it, and any challenges you faced while creating it.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/systems-project-disease-modeling-adam_/",
        "Systems Disease Modeling Project",
      )} 
    </article>
  `;
}