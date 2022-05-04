<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Particles from 'svelte-particles';
	import Habilidades from '$lib/habilidades.svelte';

	let particlesUrl = 'http://foo.bar/particles.json';

	let particlesConfig = {
		particles: {
			number: {
				value: 40,
				desnsity: {
					enable: true,
					value_area: 800
				}
			},
			color: {
				value: '#ffffff'
			},
			links: {
				enable: true,
				color: '#894cec'
			},
			move: {
				enable: true
			}
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let onParticlesInit = (event) => {
		const main = event.detail;

		// you can use main to customize the tsParticles instance adding presets or custom shapes
	};
</script>

<svelte:head>
	<title>Portafolio</title>
</svelte:head>
<div>
	<Particles
		id="tsparticles"
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		on:particlesInit={onParticlesInit}
	/>
	<div class=" text-purple-700  top">
		<div class="container mx-auto pt-12">
			<p class="text text-purple-700">¡Hola!</p>
			<p class="text text-purple-700">Soy Ivan Castro,</p>
			<span class=" text-purple-700">Web Developer: Frontend & Backend.</span>
		</div>
	</div>

	<div id="habilidades" class=" bg-red-300 habilidades">
		<Habilidades />
	</div>
</div>

<style>
	.text {
		/* font-size: 6rem; */
		font-family: 'Courier New', Courier, monospace;
		/* color: rgb(142, 89, 241); */
		color: rgb(255, 255, 255);
	}

	/* css maquina de escribit */
	span {
		display: flex;
		font-family: monospace;
		white-space: nowrap;
		border-right: 2px solid;
		width: 34ch;
		/* font-size: 3rem; */
		font-family: 'Courier New', Courier, monospace;
		/* color: rgb(142, 89, 241); */
		color: rgb(253, 253, 253);
		animation: typing 7s steps(36), blink 0.5s infinite step-end alternate;
		overflow: hidden;
	}
	.habilidades {
		height: 50rem;
		width: 100%;

		background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
			url(../../../static/img/webDeveloper.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		/* background-attachment: fixed; */
		/* perspective-origin: bottom right; */
		padding: 200px 0;
		/* transform: skew(0deg, -10deg); */
	}
	.top {
		height: 35rem;
		width: 100%;

		background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
			url(../../../static/img/principal.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		/* background-attachment: fixed; */
		/* perspective-origin: bottom right; */
		/* transform: skew(0deg, -10deg); */
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}
	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}

	@media (max-width: 576px) {
		.text {
			font-size: 2.5rem;
			margin-top: 3rem;
		}

		/* css maquina de escribit */
		span {
			font-size: 1.2rem;
			margin-top: 6rem;
		}
	}

	/* // Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		.text {
			font-size: 5rem;
		}

		/* css maquina de escribit */
		span {
			font-size: 2rem;
		}
	}

	/* // Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.text {
			font-size: 6rem;
		}

		/* css maquina de escribit */
		span {
			font-size: 3rem;
		}
	}

	/* // Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		.text {
			font-size: 6rem;
		}

		/* css maquina de escribit */
		span {
			font-size: 3rem;
		}
	}
</style>
