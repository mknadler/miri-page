<script>
	import Callout from '$lib/components/Callout.svelte'

	const formStates = {
		default: {
			disable: false,
			buttonClass: '',
			buttonText: 'Send'
		},
		waiting: {
			disable: true,
			buttonClass: '--is-progress',
			buttonText: 'Sending'
		},
		failed: {
			disable: true,
			buttonClass: '--is-failed',
			buttonText: 'Failed',
			hasError: true
		},
		success: {
			disable: true,
			buttonClass: '--is-success',
			buttonText: 'Sent',
			wasSent: true
		}
	}

	// The reactive bit
	let formState = formStates.default;

    let formSubmit = (e) => {
        e.preventDefault();

        if (formState.disable) {
        	return;
        }

        formState = formStates.waiting;

        const formData = new FormData(e.target);

        fetch("https://getform.io/f/5b4e5965-47e5-4c9c-9af9-70fce9967227", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => {
        	if (response.ok) {
        		formState = formStates.success;
        	} else {
 				formState = formStates.failed;
        	}
        })
        .catch(error => {
        	formState = formStates.failed;
        	console.log(`Email failed to send. Error: #{error}`);
        })
    }
</script>


<svelte:head>
	<title>Contact</title>
</svelte:head>


<h2>Contact</h2>

<form method="POST" accept-charset="UTF-8" id="contact-form" on:submit={formSubmit}>
    <label>Email
    	<input type="email" name="email" placeholder="Your email" required>
    </label>
    <label>Name
    	<input type="text" name="full-name" placeholder="Your name" required>
    </label>

<label>Message
<textarea rows="9" cols="70" name="email-body" form="contact-form"></textarea></label>
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <button type="submit" class={formState.buttonClass}>{formState.buttonText}</button>
</form>

{#if formState?.hasError}
	<p>{errorText}/p>
{/if}

{#if formState?.wasSent}
	<p>Your message was sent.</p>
{/if}

<style>
	input[type="text"], input[type="email"] {
		color: white;
	}

	button[type="submit"] {
		transition: background 300ms ease, border-color 300ms ease;
		border: 2px solid transparent;
	}

	textarea {
		resize: none;
		margin-top: 0;
	}

	form label {
		margin: 1rem 0;
		padding-bottom: .5rem;
		display: block;
	}

	button[type="submit"].--is-progress {
		cursor: wait;
		background: transparent;
		color: white;
		border: 2px solid var(--accent);
		opacity: .8;
	}

	button[type="submit"].--is-failed {
		background: var(--accent);
		pointer-events: none;
	}

	button[type="submit"].--is-success {
		pointer-events: none;
	}

	form *::placeholder {
		color: rgba(255, 255, 255, 0.8);
	}
</style>