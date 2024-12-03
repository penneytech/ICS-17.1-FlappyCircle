/*** GLOBAL VARIABLES ***/

let player; // Variable for the circle object

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

// Function to update the player position and velocity 
function playerPosition() {

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

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*** GAMELOOP ***/

function gameLoop(timestamp) {
  // This causes the game to loop. 
    window.requestAnimationFrame(gameLoop);
  // Clear the canvas on each 
  ctx.clearRect(0, 0, canvas.width, canvas.height);

// Call the functions we want to run
  playerPosition();
}