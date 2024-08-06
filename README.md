## 3D Chladni Patterns Visualization

## Getting started

**_Installation_**

```
yarn install
```

**_Start Project_**

```sh
yarn nx serve:dev client
```

</br>

**Overview**
This project is a 3D visualization of Chladni patterns using Three.js and React. Chladni patterns are formed by particles moving and settling at nodes on a vibrating surface, creating intricate and visually appealing designs. The simulation allows for real-time interaction through adjustable parameters, enabling users to explore different patterns dynamically.

**_Features_**
Real-time 3D Visualization: Displays particles forming Chladni patterns in a 3D space.
Interactive Controls: Users can adjust parameters such as m, n, a, b, vibration strength (v), and the number of particles using sliders.
Dynamic Simulation: Particles move and settle based on mathematical functions modeling Chladni patterns.
Smooth Transitions: Uses react-spring for smooth transitions when parameters are adjusted.
Technologies Used
React: For building the user interface.
Three.js: For rendering the 3D visualization.
React Three Fiber: A React renderer for Three.js.
React Spring: For smooth transitions and animations.
Three.js Drei: For additional helpers and abstractions in Three.js.
Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd <repository_directory>
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Usage
Once the development server is running, you can open your browser and navigate to http://localhost:3000 to interact with the simulation.

**_Parameters_**
m: Controls the number of nodal lines in one direction.
n: Controls the number of nodal lines in the perpendicular direction to m.
a: Coefficient for the sine function in the Chladni equation.
b: Coefficient for the cosine function in the Chladni equation.
v: Vibration strength affecting particle movement.
num: Number of particles in the simulation.
Adjusting Parameters
Use the sliders on the left side of the screen to adjust the parameters. The visualization will update in real-time to reflect the changes.

### Code Explanation

**_Main Components_**
CanvasCymatics: The main component that renders the canvas and controls.

Manages the state for all sliders.
Uses useSpring for smooth transitions.
Renders the Particles component within a Three.js Canvas.
Particles: The component responsible for rendering particles and updating their positions.

Uses an array of Particle objects to manage individual particle states.
Updates particle positions in each animation frame using useFrame.
Particle: A class representing a single particle.

Contains properties for position and movement.
move method updates the particle’s position based on the Chladni equation.
Chladni Equation
The Chladni equation used in the project:

javascript
Copy code
const chladni = (x, y, a, b, m, n) =>
a _ Math.sin(Math.PI _ n _ x) _ Math.sin(Math.PI _ m _ y) +
b _ Math.sin(Math.PI _ m _ x) _ Math.sin(Math.PI _ n _ y);
This function calculates the z-coordinate for particles to create a 3D effect, giving the illusion of vibrations.

### Smoothing Transitions

react-spring is used to ensure smooth transitions when parameters are adjusted. The useSpring hook creates animated values for the sliders, which are then used in the Particles component.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

This documentation provides an overview, installation instructions, usage details, code explanation, and example code to help users understand and work with the 3D Chladni Patterns Visualization project.
