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
      <p data-aos="zoom-in">So this is my proudest project I have created so far. I have used interation, selection, lists, and arrays to create this. This is a canvas that modles that spread of the flu of a population with some people that are vaccinated. This has adjustable sliders to control infection rate, vaccination rate, and the population. There is also a bar graph that shows how many infected people arose from the round. To play you control sliders to your perference and then click next round button to see people move and come closer. When the infected people which are marked red get close enough to a healthy person, they become infected. Vaccinated people which are color blue are immune to the virus.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/systems-project-disease-modeling-adam_/",
        "Systems Disease Modeling Project",
      )} 
    </article>
  `;
}