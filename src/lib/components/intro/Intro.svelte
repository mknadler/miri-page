
<div class="blurb">
	<p>I make websites for a living. I prioritize the experience of the people who use the things I make. I consider myself a generalist, but I have a deep love for wrangling css at scale, accessibility, and animation. Most of my job titles have had the word 'frontend' in them somewhere.</p>
	<p>Outside of my web practice, I also do book arts (exploring the interaction between form and function via novel book structures) and compete in pinball (2025 Women's North American Pinball Champion).</p>
	<p>I'm currently available for work. <a href="mailto:miriam.k.nadler@gmail.com">Drop a line<span class="linkdots" role="presentation">
		{#each {length: 30}, index}
			<span class="linkdot" data-index={index}></span>
		{/each}
	</span></a>.</p>
</div>

<style>
	p {
		font-size: 18px;
		margin-top: 8px;
	}
	.blurb {
		left: 0;
		padding: 2rem;
		margin: 0 2rem;
		color: #bbb;
		z-index: 2;
		border: 1px solid transparent;
		border-radius: 1rem;
		corner-shape: bevel;
		max-width: 320px;
		position: relative;
		p {
			text-wrap-style: balance;
			color: currentColor;
			span {
				text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.5), 1px 1px 1px rgba(0,0,0,0.5), -1px -1px 2px rgba(0,0,0,0.5);
        color: #9a9a9a;
			}
		}
		&:after {
      content: '';
      display: block;
      width: calc(100% - 16px);
      height: calc(100% - 16px);
      position: absolute;
      top: 4px;
      left: 4px;
      /* filter: blur(1px); */
      background: linear-gradient(to right, #00000033, #00000033);
      border-radius: 1rem;
      corner-shape: bevel;
      /* filter: blur(3px); */
      z-index: -1;
      filter: drop-shadow(2px 4px 5px #ddd) blur(1px);
      /* background-blend-mode: multiply; */
		}
	}

.blurb {
		margin-left: 4.5rem;
		max-width: 40rem;
		padding: 2rem;
		position: relative;
		z-index: 2;
		color: #bbb;
		&:after {
      content: '';
      display: block;
      width: calc(100% - 16px);
      height: calc(100% - 16px);
      position: absolute;
      top: 4px;
      left: 4px;
      /* filter: blur(1px); */
      background: linear-gradient(to right, #00000011, #00000011);
      border-radius: 1rem;
      corner-shape: bevel;
      /* filter: blur(3px); */
      z-index: -1;
      filter: drop-shadow(2px 4px 5px #ddd) blur(1px);
      /* background-blend-mode: multiply; */
		}
		a {
			color: currentColor;
			text-decoration: none;
			position: relative;
			display: inline-block;
			text-shadow: 1px 1px 1px black, -1px 0px 1px black, 0px 1px 1px black;
			position: relative;
			top: .5rem;
			&:after {
				content: '';
				display: block;
			}
			.linkdots {
				display: block;
				width: inherit;
				height: 1px;
				position: relative;
				top: -5px;
				z-index: -1;
				display: flex;
				justify-content: space-around;
				.linkdot {
					display: inline-block;
					width: 1px;
					height: 1px;
					background: cyan;
					transform: translateY(0);
					transition: transform 100ms ease-in-out;
				}
			}
			&:hover {
				.linkdot {
					transform: translateY(250%);
					&[data-index="0"], &[data-index="30"] {
						transform: translateY(100%);
					}
					&[data-index="1"], &[data-index="29"] {
						transform: translateY(125%);
					}
					&[data-index="2"], &[data-index="28"] {
						transform: translateY(150%);
					}
					&[data-index="3"], &[data-index="27"] {
						transform: translateY(175%);
					}
					&[data-index="4"], &[data-index="26"] {
						transform: translateY(200%);
					}
					&[data-index="5"], &[data-index="25"] {
						transform: translateY(225%);
					}
					&[data-index="6"], &[data-index="24"] {
						transform: translateY(250%);
					}
				}
			}
			&:active {
				.linkdot[data-index] {
					transform: translateY(200%);
				}
			}
			&:visited {
				.linkdot[data-index] {
					background: #ff006655;
				}
			}
		}
	}

</style>