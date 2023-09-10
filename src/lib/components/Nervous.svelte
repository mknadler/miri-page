<script>
	import Two from "two.js";
	import { onMount } from 'svelte';

	onMount(() => {

		// // Changeable stuff
		let test = '';
		// how wide & tall the circle should be
		let circDimension = 300;

		// How many dots should appear at start
		let initialDots = 250;

		// Create an instance of Two.js
		// two.js.org
		let elem = document.getElementById('two');
		let two = new Two({ type: Two.Types.canvas, width: circDimension, height: circDimension }).appendTo(elem);

		let radius = two.width / 2;
		let xc = two.width/2;
		let yc = two.height/2; 

		// xc, yc = center x and y coords
		function isOutside(x1, y1) {
		  return Math.pow(x1 - xc, 2) + Math.pow(y1 - yc, 2) > Math.pow(radius, 2);
		}

		// Return a random integer between min and max, inclusive
		function randBetween(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// Input: an integer between 1 and 4, corresponding to the 4
		//   out-of-bounds areas
		// Output: a (constrained) random point out-of-bounds of the box
		// This is where the circles will originate
		function genCoords(region) {
		  if (region == 1) { // West
		    return [-10, randBetween(two.height * .2, two.height * .8)];
		  } else if (region == 2) { // North
		    return [randBetween(two.width * .2, two.width * .8), -10]
		  } else if (region == 3) { // East
		    return [two.width + 10, randBetween(two.height * .2, two.height * .8)];
		  } else { // South
		    return [randBetween(two.width * .2, two.width * .8), two.height + 10];
		  }
		}

		// Input the region used to generate the starting coords
		// Output the return of genCoords for some region besides that one
		// This will be the circles will be moving to
		function genTarget(region) {
		  let regions = [1, 2, 3, 4];
		  regions.splice(region - 1, 1);
		  return genCoords(regions[randBetween(0, 2)]);
		}

		// Circle constructor
		function Circ() {

		  // Determine the circle's origin and destination
		  this.makeCoords = () => {
		    this.region = randBetween(1, 4);
		    this.coords = genCoords(this.region);
		    this.targetCoords = genTarget(this.region);
		    this.x = this.coords[0];
		    this.y = this.coords[1];
		    this.target = {
		      x: this.targetCoords[0],
		      y: this.targetCoords[1]
		    };
		  }

		  // Make it pretty
		  this.colorize = () => {
		    this.c.fill = randBetween(1, 10) == 1 ? '#AAA' : "rgb("+randBetween(150, 255)+","+0+","+randBetween(150, 220)+")";
		  }

		  // Make it exist!
		  this.setup = () => {
		    // Make it exist somewhere!
		    this.makeCoords();
		    // Make the circle svg! (It has eight vertices!!!) Third param = radius.
		    this.c = two.makeCircle(this.x, this.y, 1.5);
		    this.c.noStroke();
		    // Make it pretty!
		    this.colorize();
		    // Give it a speed [.0025: .005] movement per frame
		    this.vel = 1 / randBetween(400, 1000);
		    // This will be used later to determine whether to remove it
		    this.beenInside = false;
		  }

		  this.setup();

		  this.realign = () => {
		    this.makeCoords();
		    this.c.translation.set(this.x, this.y);
		    this.colorize();
		    this.beenInside = false;
		  }
		}

		// Array for use in the animation bits
		let circs = [];

		// Add a bunch of circles
		for (let i = 0; i<= initialDots; i++) {
		  circs.push(new Circ());
		}

		let unusedLinePool = [];

		// Line constructor
		function Line(circ1, circ2) {
		  // Lets this and the circles know that they are pals
		  this.setCircLines = (circA, circB) => {
		    // redo the circle and line gluing
		    this.circles = [circA, circB];
		    circA.line = this;
		    circB.line = this;
		  }

		  // Object creation and initial states
		  this.setup = () => {
		    this.l = two.makeLine(circ1.c.translation.x, circ1.c.translation.y, circ2.c.translation.x, circ2.c.translation.y);
		    this.g = two.makeLinearGradient(circ1.c.translation.x, circ1.c.translation.y, circ2.c.translation.x, circ2.c.translation.y, new Two.Stop(0, circ1.c.fill), new Two.Stop(1, circ2.c.fill));
		    this.disabled = false;
		    this.l.linewidth = 1;
		    this.l.stroke = this.g;
		    this.setCircLines(circ1, circ2);
		  }

		  // Fire the above when a new Line is created
		  this.setup();

		  // Break up with all partners and instantly become invisible
		  this.turnOff = () => {
		    this.circles.forEach(function(c) {
		      c.line = false;
		    });
		    this.circles = [];
		    this.l.opacity = 0;
		    this.disabled = true;
		  }

		  // Become visible again, having found new partners in this.reset
		  this.turnOn = () => {
		    this.l.opacity = 1;
		    this.disabled = false;
		  }

		  // A C T I V A T I N G
		  this.reset = (circA, circB) => {
		    this.setCircLines(circA, circB);
		   //console.log('reset activated');
		    let ax = circA.c.translation.x;
		    let ay = circA.c.translation.y;
		    let bx = circB.c.translation.x;
		    let by = circB.c.translation.y;
		    // reset the line position
		    this.l.translation.set((ax + bx) / 2, (ay + by) / 2);
		    this.l.vertices[0].set(ax - this.l.translation.x, ay - this.l.translation.y);
		    this.l.vertices[1].set(bx - this.l.translation.x, by - this.l.translation.y);
		    // reset the gradient position and location
		    this.g.left.copy(this.l.vertices[0]);
		    this.g.right.copy(this.l.vertices[1]);
		    this.g.stops[0].color = circA.c.fill;
		    this.g.stops[1].color = circB.c.fill;
		    this.turnOn();
		  }
		}

		// Line array for use in animation bits
		let lines = [];

		let unlinedCircPool = [];

		two.bind('update', function(frameCount, timeDelta) {
		  let ct = circs.length;
		  for (let i = 0, l = circs.length; i < l; i++) {
		    // Move each circle a bit to the left/right and up/down
		    let cir = circs[i];
		    let xDelt = cir.vel * (cir.target.x - cir.x);
		    let yDelt = cir.vel * (cir.target.y - cir.y);
		    cir.c.translation.set(cir.c.translation.x + xDelt,  cir.c.translation.y + yDelt);
		    // If there's an associated line, move that line's vertex that rests on the center of this circle as well
		    if (cir.line) {
		      let line = cir.line;
		      // the line's vertices[the associated circle]
		      let vert = line.l.vertices[line.circles.indexOf(cir)];
		      vert.set(vert.x + xDelt, vert.y + yDelt)
		    }
		  }    
		 
		  for (let i = 0, l = circs.length; i < l; i++) {
		    // If the circle hasn't been inside and currently is,
		    // Mark it as having been inside 
		    let cir = circs[i]; 
		    if (!cir.beenInside && isOutside(cir.c.translation.x, cir.c.translation.y) == false) {
		      cir.beenInside = true;
		      if (!cir.line) {
		        unlinedCircPool.push(i);
		      }
		    }
		  }

		 // Make new lines...
		 for (let i = 0, l = circs.length; i < l; i++) {
		    // ...if the current circle and next circle don't have lines already
		    // then there's a tiny chance per frame to form one.
		    let cir = circs[i];
		    if (cir.beenInside && !cir.line && Math.random() > .999) {
		      let availCirc = circs[unlinedCircPool.shift()];
		      if (availCirc && !availCirc.line) {
		        // Try to grab a line from the pool of previously-used lines
		        let availLine = lines[unusedLinePool.shift()];
		        if (availLine) {
		          availLine.reset(cir, availCirc);
		        } else {
		          // If there isn't an unused line available, make a new one
		          lines.push(new Line(cir, availCirc));
		        }
		      }
		    }
		  }
		  // If the circle has been inside and no longer is...
		  for (let i = 0, l = circs.length; i < l; i++) {
		    let cir = circs[i];
		    if (cir.beenInside && isOutside(cir.c.translation.x, cir.c.translation.y)) {
		      // ... find the associated line, if any, and  ...
		      if (cir.line) {
		        // ... push its index to an index array for ease of reuse ...
		        unusedLinePool.push(lines.indexOf(cir.line));
		        // .. then deactivate it for now ...
		        cir.line.turnOff();
		      }
		      // ... then move the circle to a new starting position.
		      cir.realign();
		    }
		  }
		}).play();
	});

</script>

<div class="nervous-container">
	<div id="two"></div>
</div>

<style>
	@media (prefers-reduced-motion) {
		.nervous-container {
			display: none;
		}
	}

	.nervous-container {
		width: 100%;
		height: 300px;
		position: relative;
		margin: 3rem 0 5rem 0;
	}
	:global(#two canvas) {
		border-radius: 50%;
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>