<header>
	<!--<h1>&nbsp;</h1>-->
	<div class="intro">
		<p><strong>miri.page</strong> is the personal site of <span>Miriam Nadler</span>, a web developer in Brooklyn, NY</p>
	</div>
</header>

<style>
	header {
		position: relative;
		padding: 2rem;
		opacity: 1;
		transition: opacity 50ms;
		font-family: "Iosevka Charon Mono";
		z-index: 2;
		@media (max-width: 40rem) {
			padding: 2rem 0;
		}
	}
	h1 {
		font-size: 60px;
		font-family: "Iosevka Charon Mono";
		width: fit-content;
		font-family: "Texturina";
		margin-bottom: 0;
		text-align: center;
		color: #222222cc;
		text-shadow: 1px 1px 80px #555;
		position: relative;
		&:after {
        content: '';
        display: block;
        width: calc(100% + 16px);
        height: 80px;
        position: absolute;
        top: 0;
        left: -8px;
        /* filter: blur(1px); */
        background: linear-gradient(to right, #00000033, #00000033);
        /* filter: blur(3px); */
        z-index: -1;
        filter: drop-shadow(2px 4px 5px #ddd) blur(1px);
        /* background-blend-mode: multiply; */
		}

	}

	.intro {
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
		@media (max-width: 40rem) {
			margin: 0;
		}
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
</style>

