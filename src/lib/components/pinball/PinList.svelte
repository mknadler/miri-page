<script>
	export let pins = []
</script>

<!-- name, url, num, image -->


<ul class="pins-list">
	{#each pins as pin}
		<li class="pins-list__wrapper">
			<div class="pins-list__info">
				<span class="pins-list__title">
					<span class="pins-list__title__name">{pin.machine}</span>
					<span class="pins-list__title__div">{pin.division}</span>
				</span>

				<div class="pins-list__links">
					{#if pin.rulesheet}
						<span>Rulesheet: <a href="{pin.rulesheet}" target="blank">{pin.rulesheet}</a></span>
					{/if}
					{#if pin.pintips}
						<span>PinTips: <a href="{pin.pintips}" target="blank">{pin.pintips}</a></span>
					{/if}
					{#if pin.pinpal}
						<span>CO PinPal: <a href="{pin.pinpal}" target="blank">{pin.pinpal}</a></span>
					{/if}
					{#if pin.soldmy}
						<span>SoldMyEM Guide: <a href="{pin.soldmy}" target="blank">{pin.soldmy}</a></span>
					{/if}
				</div>
				<div class="pins-list__body">
					{@html pin.body}
				</div>
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	.pins-list {
		list-style: none;
		padding: 0;
	}

	.pins-list__title {
		display: flex;
		justify-content: space-between;
		background: rgba(#C2366E, .2);
		padding: 0 .25rem;
		height: 60px;
	}

	.pins-list__title__div {
		padding-right: .5rem;
		line-height: 60px;
	}

	.pins-list__title__name {
		font-size: 32px;
		font-family: var(--accentFont);
		padding-left: .5rem;
		line-height: 52px;
	}


	.pins-list__wrapper {
		border: 3px solid var(--darkpink);
		background: #110026;
		padding: 0;
		margin-bottom: 2rem;
	}

	.pins-list__links {
		padding: 1rem;
		overflow-wrap: break-word;
	}

	.pins-list__links span {
		display:  block;
	}

	.pins-list__body {
		padding: 1rem;
		font-family: "Space Grotesk";
		overflow-wrap: break-word;
	}

	@media (max-width: 600px) {
		.pins-list__title__name {
			font-size: 24px;
			line-height: 56px;
		}
	}
</style>