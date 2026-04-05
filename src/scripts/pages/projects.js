// src/scripts/pages/projects.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderProjects() {
  /* html */
  return `
    <!-- code generated in projects.js -->
    <h1 data-aos="fade-up">My Projects</h1>
    ${renderMenu()}
    <h2 data-aos="zoom-in-up">Explore My Work</h2>
    <p data-aos="fade-in">Here is a list of projects I've created. Click on each to see more details.</p>
    <ul>
      <li data-aos="fade-up">
        <a href="#/binary-search">Binary Search Project</a>
        <p>A fun questionnaire based on Spongebob Squarepants characters that uses binary search to match users with their character.</p>
      </li>
      <!-- Add more projects here as you create them -->
    </ul>
    <!-- end code generated in projects.js -->
  `;
}
