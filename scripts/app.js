//Snake Game

//requirements
    // HTML
        //Add Title and Current score elements

    //JS
        // create a grid in JS
        //have a start game button function that plays everyhing listed below 
        // make Pyramid Head.gif move in the grid with a trail of torment.gif of 3 boxes
        // have pyramid head move with arrow keys and/or 'WASD'
        // character will rotate and it's trail will when it changes direction!
        // function to make a random person appear on the screen with Math.random
        // when character is in the same square as the random object, remove the object and call function again
        // when character consumes the object have the trail length be +1
        // when character touches the edge have the game end
        // once game ends show end game score

// frogger
    // HTML
        // add Title and level counter

    // JS
        // create Grid
        // create movement for survivor
        // obstacles will be zombies.gif and crawling zombies.gif that you have to jump on cars to survive
        // math.random to find out which zombie will show up between 3 different zombies
        // if the character is in the same position as a zombie they die and go back to the start
        // once the survivor is on one of the four armouries they go to the next level
        // next level will have faster moving zombies

// PAC-MAN
    // Title and current score

//JS
    // //Create Grid
    // //create Movement for Viking
    // current score will be skulls drunken blood from
    // create map
    // the ghosts will be knights (and/or maybe samurai)
    // once Viking consumes his Beserk potion have the knights panic and disarmed(if possible)
    // when viking is on the same spot on the grid as a knight sound effects of swords hitting no matter if viking has gone beserk or not
    // have two spots on the map be ports so that the viking can take a longboat to the other port on the map
    // when the viking reaches the left or right side of the map have him go to the opposite side.
    // **Bonus** have a character selection screen with different factions to chose from, Viking, Knight, Samurai and every time you pick on faction it will show opposite factions as enemies
    // **Bonus** as soon as the berserker consumes the potion give him the ability to throw 1 axe

    function init() {

        const grid = document.querySelector('.grid')
        let currentScoreText = document.querySelector("#CurrentScore")
        

        const width = 14
        const cellCount = width * width
        const cells = []
      
        const startingVikingPosition = 0
        let currentVikingPosition = 0
        let VikingClass = "Viking"
        let VikingClassLeft = "VikingLeft"
        
        // Grid Creation

        function createGrid(startingVikingPosition) {
          for (let i = 0; i < cellCount; i++) {
            
            const cell = document.createElement('div')
            cell.id = i
            cell.classList.add("coin")
            grid.appendChild(cell)
            cells.push(cell)
            
          }
          addViking(startingVikingPosition)
        }
      
        const wallClass = 'disapprovedMovement'

        const walls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 27, 41, 55, 69, 83, 97, 111, 125, 139, 153, 167, 181, 195,
        194, 193, 192, 191, 190, 189, 188, 187, 186, 185, 184, 183, 182, 168, 154, 140, 126, 112, 98, 84, 70, 56, 42, 28, 14]

          function addWalls() {
        walls.forEach((wall) => {
          cells[wall].classList.add(wallClass)
        });
      }

        // const cell = document.createElement('div')
        // const walls = cell.find((indCell) => {
        //   return indCell.id = "5"
          
        // })
        // walls.classList.add("disapprovedMovement")

        function addViking(position) {
          cells[position].classList.add(VikingClass)
        }
      
        function removeViking(position) {
          cells[position].classList.remove(VikingClass)
          cells[position].classList.remove(VikingClassLeft)

        }
      
        let currentScore = 0

        function removeCoin(position) {
          
          if(cells[position].classList.contains("coin")) {
            currentScore++
            currentScoreText.innerText = currentScore
            
          }
          cells[position].classList.remove("coin")
          console.log(currentScore)
        }

        function handleKeyUp(event) {
          console.log('position before key', currentVikingPosition)
          const key = event.keyCode
          removeViking(currentVikingPosition)
          removeCoin(currentVikingPosition)
      
          if (key === 39 && currentVikingPosition % width !== width - 1) {
            console.log('RIGHT')
            currentVikingPosition++
            cells[currentVikingPosition].classList.toggle("Viking")
          } else if (key === 37 && currentVikingPosition % width !== 0) {
            console.log('LEFT')
            currentVikingPosition--
            cells[currentVikingPosition].classList.toggle("VikingLeft")
          } else if (key === 38 && currentVikingPosition >= width && !(cells[currentVikingPosition].classList.contains(wallClass))) {
            console.log('UP')
            currentVikingPosition -= width
            cells[currentVikingPosition].classList.toggle("VikingLeft")
          } else if (key === 40 && currentVikingPosition + width <= width * width - 1) {
            console.log('DOWN')
            currentVikingPosition += width
            cells[currentVikingPosition].classList.toggle("Viking")
          } else {
            console.log('INVALID KEY')
            
          }
          
          addViking(currentVikingPosition)
        }
      
        
        
      
        document.addEventListener('keyup', handleKeyUp)
      
        createGrid(startingVikingPosition)

        addWalls()


        window.addEventListener("keydown", function(e) {
            if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);
      
      }
      
      window.addEventListener('DOMContentLoaded', init)