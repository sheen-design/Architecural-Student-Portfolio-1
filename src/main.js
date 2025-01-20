import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const corpse = [
  "./Cadavre Exquis/Cadavre Exquis 1.png",
  "./Cadavre Exquis/Cadavre Exquis 2.png",
  "./Cadavre Exquis/Cadavre Exquis 3.png",
  "./Cadavre Exquis/Cadavre Exquis 4.png",
  "./Cadavre Exquis/Adapt to Survive - references.png",
]

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      CADAVRE EXQUIS: ADAPT TO SURVIVE
        <div class="three-model">
          <a href="./Cadavre Exquis.png" target="_blank"><img src="Cadavre Exquis.png" alt="Cadavre Exquis" id="model1" /></a>
        </div>
        <div id="images-description">
          <div id="images">
            ${corpse
              .map(
                (cube, index) => `<a href="${cube}" target="_blank"><img src="${cube}" alt="cube${index + 1}" /></a>`
              )
              .join("")}
          </div>
          <h4 id="description">“Adapt to Survive” delves into the intrinsic values and skills that are important to navigate through life’s challenges. The process of creating “Adapt to Survive” began with analyzing my personal beliefs, values, and philosophies. I identified a symbol from nature that encompassed many of the values I believe are necessary for successfully maneuvering through the trials of life. Hence, I arrived at the symbolism and meaning behind octopuses. Octopuses represent a myriad of characteristics that are applicable to the human experience, and they are traits that I recognize within people around me that have influenced a more well-rounded personality. I have chosen eight traits of octopuses that seem to have a strong correlation to human behaviour: Intelligence, adaptability, agility, awareness, altruism, mystery, creativity, and exploration. There is contrasting imagery in my cadavre exquis to highlight the highly adaptable nature of octopuses in relation to the human condition, which are both tested by the tribulations of life. The scene involves a harsh environment, such as mountainous terrain, pointed coral reefs, and rogue attacking arrows. To survive in such an environment, creatures such as octopuses must adjust, transform, and modify themselves to suit their surroundings. Thus, the octopus in the image has adapted to nature by strengthening its intelligence, heightening its awareness, utilizing its strengths to its advantage, fostering creativity, while simultaneously retaining a sense of compassion. Although the octopus is injured by the treacherous environment, it finds ways to protect itself and become stronger, as symbolised by its spear and swordfish weapons and regenerated limbs. This analogy of the octopus clearly demonstrates the perseverance and strength of the human spirit in the face of daunting challenges. Often it is easier to allow nature to dominate us, fear to overpower us, and weakness to overcome us. However, by practicing values that strengthen our resolve, humans are able to conquer barriers that once seemed impossible to defeat.</h4>
        </div>
      </div>

      ${/*}
      <div id="project-row">
      INTEROPERABILITY
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          
          
          
          <div id="images">
            ${custom
              .map(
                (custom, index) =>
                  `<img src="${custom}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>

          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>

      <div id="project-row">
      OBJECT DESIGN
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>

      <div id="project-row">
      PLACEMAKING
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>    
      
      <div id="project-row">
      ARCHITECTURAL FLUIDITY
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
