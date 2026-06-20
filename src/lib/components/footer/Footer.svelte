<script></script>

<footer>
	<!-- svelte-ignore element_implicitly_closed -->
	<p>Thanks for stopping by. If you'd like to get in touch, <a href="mailto:miriam.k.nadler@gmail.com">send me an email</a>.</p>
</footer>

<style>
	footer {
		border: 3px dotted #ccc;
		border-style: double;
		height: 4rem;
		width: fit-content;
		height: auto;
		margin: 1rem;
	}
	p {
		line-height: 1.5;
		margin: 0 .5rem 0 .5rem;
		padding: .5rem .25rem;
		max-width: auto;
	}
	a {
		color: cyan;
		&:hover {
			color: color-mix(cyan 80%, black 20%);
		}
		&:visited {
			color: color-mix(cyan 30%, #ff0066 70%);
		}
		&:active {
			color: color-mix(cyan 10%, #ff0066 90%);
		}
		&:focus-within {
			color: color-mix(cyan 90%, #ff0066 20%);
		}
	}
</style>