This project creates dynamic name tag stickers with a fun, colorful design using HTML, CSS, and JavaScript. Each name tag is randomly assigned a background color and rotation to give it a playful effect. The page automatically refreshes every second to re-render the stickers with new styles.

Technologies Used
HTML: Defines the structure of the page.
CSS: Styles the page, including fonts, colors, and layout.
JavaScript: Generates stickers dynamically and applies random effects.
How It Works
HTML Template:

The template element defines the structure of each sticker.
Stickers contain a greeting text ("Hi!"), label ("My name is"), and a name area populated dynamically by JavaScript.
CSS Styling:

The page uses a gradient background and a centered layout.
Stickers are given rounded corners, shadow effects, and transform animations for smooth transitions.
JavaScript Functionality:

A set of predefined names and colors is used.
JavaScript selects names from an array and assigns each a random color and rotation.
The stickers are added dynamically to the page.
Auto-refresh every second re-generates stickers with new styles.
Files Overview
index.html:
Contains the main structure with a <template> element for the stickers.

style.css:
Styles the body, stickers, and text. It ensures the layout is centered and visually appealing.

script.js:
Contains JavaScript logic to generate name stickers, apply random transformations, and refresh the page every second.
How to Run
Clone the repository:
git clone <repository-url>
cd name-tag-stickers

Run the project:
Open index.html in any web browser.
Usage Instructions
Add more names to the names array in script.js to generate more stickers.
Customize colors by adding new colors to the colors array in script.js.
Modify the CSS for further styling tweaks, such as changing border styles or background gradients.
Project Demo
Here’s how the output looks:

Dynamic stickers with different names and random rotations.
Stickers get new colors and placements on each refresh.
Future Enhancements
Add user input for custom names.
Implement a pause button to stop auto-refresh.
Use local storage to retain stickers across page reloads.


Enjoy creating playful name tag stickers! 🎨
