# Berserkers Trial
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


<h2>Technologies used</h2>
<ul>
  <li style="list-type: none;"><img style="width: 50px;" src="https://i.imgur.com/BYUqdTS.png"></li>
  <li style="list-type: none;"><img src="https://i.imgur.com/QlYh5mv.png"></li>
  <li style="list-type: none;"><img src="https://i.imgur.com/AHjDRG3.png"></li>
</ul>

            
How did I do it?

I had exactly 9 days to plan and work on the project. I started off by planning, after planning I decided to start the grid for the game, then messed around with the styling. After styling the website, it was time to make the game operational and then slowly finish by fixing bugs and tweaking the game a little.

<hr />

1st Day: Drawing board

I spent the day planning for the project. I wrote down pseudo code for the project, breaking everything down to make it easier for myself in the future when I attempt to create “Berserkers Trial”.
—-------------------------------------------------------------------------------------------------
2nd Day:  Kickoff

I worked on creating the grid along with finding out what size the grid should have. Using JavaScript I made a function that loops through the cell count which is width x width, (width is 14) so then it starts making a grid with 14x14 cells. For each cell to create an element of “div”. I also needed to make my character and allow the user to move him on the grid, the Viking also had to face the direction he was moving to. While I was doing my project my brother sat next to me producing the soundtrack for the game.

—-------------------------------------------------------------------------------------------------
4th Day:       Styling

Over the weekend, I created the theme of the game. I started with getting a background with a background-image that represents the player being in a dungeon. I found some block images from the popular game Minecraft and had them act as walls in my game before looking for other assets like the coin, potion gif, and skeleton gif that suited the game. All of these assets were added with classes for each individual grid. I found this stunning runic font then I added some functionality with the Viking now able to pick up coins and put them in his score. The function of the Viking picking coins works by detecting if the div element the Viking is in has a coin, remove the coin and give the player 10 points.



—-------------------------------------------------------------------------------------------------
7th Day:  Operational

In the first couple of weekdays, I started introducing enemies to the Viking. I started by adding all the enemies followed by allowing them to move with "math.random". The problem with this is that the skeletons were struggling to get out of their spawn so to fix this I made animations with JS to make the move a specific direction on game start. But now that there are enemies, the Viking had to find a way to eliminate them so I added functionality to the potion which gives a class to the Viking that’s on a 10-second timer when he’s able to fight against the skeletons when he kills one he gets 150 coins. I did this with setTimeout(), when the Viking picks up the potion it gives him the class of “BerserkMode”. When the Viking has the class “Berserk mode” he is able to eliminate enemies. If the Viking walked into the skeleton without “Berserk mode”, he would lose a life and go back to where he originally spawned. I just set the Viking position as the same as where he originally spawned in the correct cell in the array.



—-------------------------------------------------------------------------------------------------
9th Day: Concluding

The last days were about giving the finishing touches to the game. I added sound effects for everything: eliminating skeletons, coin pick up, potion, and dying with play(). I found these sound effects online myself and some were found by my brother who previously helped improve the soundtrack even more. I made it even easier for the skeletons to get out of their spawn and introduced a play again button plus a mute/unmute button. Now when the Viking steps on a box with a coin inside it will add it to his score as before he would pick up the coin when leaving his box.

—-------------------------------------------------------------------------------------------------

Featured Code: {code of the skeletons movement}
—-------------------------------------------------------------------------------------------------

Bugs:

Unfortunately as of writing this, the enemies don’t have any intelligence, they only move in random positions.
The Viking is only able to lose a life if he walks into a skeleton, ideally it would be when the skeleton steps into the same grid as the Viking he loses a life.
There is no endgame screen other than a prompt that the game is over.
Sometimes the berserk potions don’t work as intended.

Wins and Challenges:

Biggest challenge was getting the grid sorted as well as how to manage and modify it. 
Finishing the project gave me so much confidence with JavaScript and greatly increased my understanding of the language.

Future improvements:

Make the enemies smarter
Make an endgame screen
Add a bonus feature which was to have the ability to throw an axe at the enemy
Have the enemies be able to take a life away when they step on you (currently they only make you lose a life if you step on them)

Key Learnings:

When developing the game, I struggled a lot having DRY code, it later on came back to bite me and the game could’ve probably been a lot better if I had simply made the code readable. So in my future projects I made an effort to name the variables correctly and refactor the code to be as readable as possible.


