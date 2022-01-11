<h1 align="center"> Berserkers Trial</h1>
<h2>The Brief</h2>
<ul>
  <li>Render a grid game in the browser.</li>
  <li>Create a playable character.</li>
  <li>The computer must be able to move around.</li>
  <li>The computer must be able to take a life away from the player.</li>
  <li>A play button to start the game and to replay the game.</li>
  <li>Include separate HTML, CSS and JavaScript files.</li>
</ul>
<h2>Game description</h2>

I had a week to work on a grid game of my choice. I chose PAC-MAN because I knew I could give a unique theme to the game. You play as a Viking fighting off skeletons in a dungeon and you could only kill the skeletons once you picked up the “berserk” potion. I found some nice sound effects online and I worked with my brother to make a soundtrack for the game.

<h2>Deployed version <a href="https://olys6.github.io/Berserkers-Trial/" target="_blank" rel="noreferrer">here</a></h2>
<img src="https://i.imgur.com/NUz3MAw.gif">


<h2>Technologies used</h2>
<div style="display: flex; flex-direction: row; gap: 1.5rem; margin-bottom: 10px;">
  <img style="width: 70px;" src="https://i.imgur.com/BYUqdTS.png">
  <img style="width: 70px;" src="https://i.imgur.com/QlYh5mv.png">
  <img style="width: 70px;" src="https://i.imgur.com/AHjDRG3.png">
</div>

            
<h2>How did I do it?</h2>

I had exactly 9 days to plan and work on the project. I started off by planning, after planning I decided to start the grid for the game, then messed around with the styling. After styling the website, it was time to make the game operational and then slowly finish by fixing bugs and tweaking the game a little.

<hr />

<h2>1st Day: <img style="width: 30px" src="https://i.imgur.com/cPNQLq5.gif"/> Drawing board</h2>

I spent the day planning for the project. I wrote down pseudo code for the project, breaking everything down to make it easier for myself in the future when I attempt to create “Berserkers Trial”.

<h2>2nd Day: <img style="width: 30px" src="https://i.imgur.com/GmSxwrR.gif"/>  Kickoff</h2

<p>I worked on creating the grid along with finding out what size the grid should have. Using JavaScript I made a function that loops through the cell count which is width x width, (width is 14) so then it starts making a grid with 14x14 cells. For each cell to create an element of “div”. I also needed to make my character and allow the user to move him on the grid, the Viking also had to face the direction he was moving to. While I was doing my project my brother sat next to me producing the soundtrack for the game.</p>

<img src="https://i.imgur.com/gv7h00S.gif">

<h2>4th Day: <img style="width: 30px" src="https://i.imgur.com/ExWhMvB.gif"/> Styling</h2>

Over the weekend, I created the theme of the game. I started with getting a background with a background-image that represents the player being in a dungeon. I found some block images from the popular game Minecraft and had them act as walls in my game before looking for other assets like the coin, potion gif, and skeleton gif that suited the game. All of these assets were added with classes for each individual grid. I found this stunning runic font then I added some functionality with the Viking now able to pick up coins and put them in his score. The function of the Viking picking coins works by detecting if the div element the Viking is in has a coin, remove the coin and give the player 10 points.

<img src="https://i.imgur.com/7DAQ61j.gif">

<h2>7th Day: <img style="width: 30px" src="https://i.imgur.com/APJl7cm.gif"/> Operational</h2>

In the first couple of weekdays, I started introducing enemies to the Viking. I started by adding all the enemies followed by allowing them to move with "math.random". The problem with this is that the skeletons were struggling to get out of their spawn so to fix this I made animations with JS to make the move a specific direction on game start. But now that there are enemies, the Viking had to find a way to eliminate them so I added functionality to the potion which gives a class to the Viking that’s on a 10-second timer when he’s able to fight against the skeletons when he kills one he gets 150 coins. I did this with setTimeout(), when the Viking picks up the potion it gives him the class of “BerserkMode”. When the Viking has the class “Berserk mode” he is able to eliminate enemies. If the Viking walked into the skeleton without “Berserk mode”, he would lose a life and go back to where he originally spawned. I just set the Viking position as the same as where he originally spawned in the correct cell in the array.

`Animated movement at start of the game: 

        function addEnemy1Start(position) {

          cells[position].classList.add('enemy1')
          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            if(!(cells[enemy1Position + 1].classList.contains(wallClass)) && !(cells[enemy1Position + 1].classList.contains('enemy3'))){
              enemy1Position++
            } 
            cells[enemy1Position].classList.add('enemy1')
          }, 400)
          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position -= width
            cells[enemy1Position].classList.add('enemy1')
          }, 600)

          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position -= width
            cells[enemy1Position].classList.add('enemy1')
          }, 800)

          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position++
            cells[enemy1Position].classList.add('enemy1')
          }, 1000)

          setTimeout(() => {
            cells[enemy1Position].classList.remove('enemy1')
            enemy1Position++
            cells[enemy1Position].classList.add('enemy1')
          }, 1200)
      }
` 
<img src="https://i.imgur.com/CQvoNhV.gif">

<h2>9th Day: <img style="width: 30px" src="https://i.imgur.com/WocA7NJ.gif"/> Concluding</h2>

The last days were about giving the finishing touches to the game. I added sound effects for everything: eliminating skeletons, coin pick up, potion, and dying with play(). I found these sound effects online myself and some were found by my brother who previously helped improve the soundtrack even more. I made it even easier for the skeletons to get out of their spawn and introduced a play again button plus a mute/unmute button. Now when the Viking steps on a box with a coin inside it will add it to his score as before he would pick up the coin when leaving his box.

`How the enemies move: 

        function addEnemy2Start(position) {

          cells[position].classList.add('enemy2')
          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            if(!(cells[enemy2Position + 1].classList.contains(wallClass)) && !(cells[enemy2Position + 1].classList.contains('enemy3'))){
              enemy2Position++
            } 
            cells[enemy2Position].classList.add('enemy2')
          }, 800)
          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position -= width
            cells[enemy2Position].classList.add('enemy2')
          }, 1000)

          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position -= width
            cells[enemy2Position].classList.add('enemy2')
          }, 1200)

          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position -= width
            cells[enemy2Position].classList.add('enemy2')
          }, 1400)

          setTimeout(() => {
            cells[enemy2Position].classList.remove('enemy2')
            enemy2Position++
            cells[enemy2Position].classList.add('enemy2')
          }, 1600)
        } 
  `


<h2>Bugs:</h2>
<ul>
<li>Unfortunately as of writing this, the enemies don’t have any intelligence, they only move in random positions.</li>
<li>The Viking is only able to lose a life if he walks into a skeleton, ideally it would be when the skeleton steps into the same grid as the Viking he loses a life.</li>
<li>There is no endgame screen other than a prompt that the game is over.</li>
<li>Sometimes the berserk potions don’t work as intended.</li>
</ul>
<h2>Wins and Challenges:</h2>
<ul>
<li>Biggest challenge was getting the grid sorted as well as how to manage and modify it.</li> 
<li>Finishing the project gave me so much confidence with JavaScript and greatly increased my understanding of the language.</li>
</ul>
<h2>Future improvements:</h2>
<ul>
<li>Make the enemies smarter</li>
<li>Make an endgame screen</li>
<li>Add a bonus feature which was to have the ability to throw an axe at the enemy</li>
<li>Have the enemies be able to take a life away when they step on you (currently they only make you lose a life if you step on them)</li>
</ul>
<h2>Key Learnings:</h2>

When developing the game, I struggled a lot having DRY code, it later on came back to bite me and the game could’ve probably been a lot better if I had simply made the code readable. So in my future projects I made an effort to name the variables correctly and refactor the code to be as readable as possible.


