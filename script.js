/*** GLOBAL VARIABLES ***/

let player; // Variable for the circle object
            // Create a variable for the spacebar here
            // Create the gameon variable to check if the game is on or off

/*** SPACEBAR document.body.keydown LISTENER ***/


    // write the listener for the spacebar key here


/*** INIT FUNCTIONS ***/

// Call the init function when the HTML window loads
window.onload = init;

function init() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');

  // Starting velocity value for each circle
  const startvelocity = 0.1;

  // Create a new circle object on init. 
  player = new circle(
    250, // X position 
    canvas.height / 2, // Y position
    10, // Radius
    "red", // Color 
    0.1 // Starting velocity
  );

  // Create the rectangle object on init - rectangle = new rectangle(.......)





  window.requestAnimationFrame(gameLoop);
}

/*** OBJECTS AND FUNCTIONS FOR GAME ***/

// Circle object to rerpesent the player
function circle(x, y, radius, color, velocity) {
  this.x = x;
  this.y = y;
  this.radius = radius
  this.color = color;
  this.velocity = velocity;
};

// Create the Rectangle object to represent the obstacle - function rectangle(.......)





// Create the rectanglePosition function to draw the rectangle on the canvas





// Create the collision detection function to check if the circle collides with the rectangle








// Function to update the player position and velocity 
function playerPosition() {

  // Create the if statement for the spacebar here to set the velocity to -5




  //  Check to see if circle is below the canvas
  if (player.y > 480) {
    player.velocity = 0 // Set velocity to zero (circle hits the ceiling)
    player.y = 480; // Make sure circle doesn't exceed 480 (circle hits the floor)
  }

  // Draw the circle
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fillStyle = player.color;
  ctx.fill();

  // Update the position of the circle
  player.y = player.y + player.velocity;
  // Update the velocity of the circle 
  player.velocity = player.velocity + 0.1;

}

// Function to generate a random integer between min and max
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
 
/*** GAMELOOP ***/

function gameLoop(timestamp) {
  // This causes the game to loop (modify this with the gameon variable to stop the game)
    window.requestAnimationFrame(gameLoop);

  // Clear the canvas on each 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// Call the functions we want to run
  playerPosition(); // Update the player position
                    // Call the rectanglePosition function to draw the rectangle on the canvas
}