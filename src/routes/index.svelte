<script lang="ts">
	import Particles from 'svelte-particles';
	import Habilidades from '$lib/habilidades.svelte';
	import Proyectos from '$lib/proyectos.svelte';
	import { onMount } from 'svelte';
	import { contReadable, array } from '$stores/store';

	let particlesUrl = 'http://foo.bar/particles.json';
	let particlesConfig: any;

	let loaded: boolean = false;
	let particules: HTMLElement;

	onMount(async () => {
		particlesConfig = {
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
		loaded = true;
	});

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let onParticlesInit = (event) => {
		const main = event.detail;

		// you can use main to customize the tsParticles instance adding presets or custom shapes
	};
	// $: console.log('readable: ', $contReadable);
	// $: console.log($array);
</script>

<svelte:head>
	<title>Portafolio</title>
</svelte:head>
{#if particlesConfig}
	<div>
		<!-- class:loaded bind:this={particules} -->
		<div class=" text-purple-700  top" class:loaded bind:this={particules}>
			<Particles
				id="tsparticles"
				options={particlesConfig}
				on:particlesLoaded={onParticlesLoaded}
				on:particlesInit={onParticlesInit}
			/>
			<div class="container mx-auto pt-12">
				<p class="text text-purple-700">¡Hola!</p>
				<p class="text text-purple-700">Soy Ivan Castro</p>
				<div class="flex items-center">
					<span class=" text-purple-700 "> Web Developer: </span>
					{#if $contReadable !== null}
						<p class="st mt-5">{$array[$contReadable]}</p>
					{/if}
				</div>
			</div>
			<!-- </Particles> -->
		</div>

		<div id="habilidades" class="  habilidades">
			<Habilidades />
		</div>
		<div id="proyectos" class="mb-8">
			<Proyectos />
		</div>
	</div>
{/if}

<style>
	.text {
		/* font-size: 6rem; */
		font-family: 'Courier New', Courier, monospace;
		/* color: rgb(142, 89, 241); */
		color: rgb(255, 255, 255);
	}
	.st {
		font-size: 3rem;
		margin-top: 4rem;
	}

	/* css maquina de escribit */
	span {
		display: flex;
		font-family: monospace;
		white-space: nowrap;
		border-right: 2px solid;
		width: 18ch;
		/* font-size: 3rem; */
		font-family: 'Courier New', Courier, monospace;
		/* color: rgb(142, 89, 241); */
		color: rgb(253, 253, 253);
		animation: typing 1.5s steps(13), blink 0.5s infinite step-end alternate;
		overflow: hidden;
	}
	p {
		display: flex;
		font-family: monospace;
		white-space: nowrap;

		width: 34ch;
		/* font-size: 3rem; */
		font-family: 'Courier New', Courier, monospace;
		/* color: rgb(142, 89, 241); */
		color: rgb(253, 253, 253);
	}
	.habilidades {
		/* height: 50rem; */
		width: 100%;

		background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
			url(../../../static/img/webDeveloper.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		/* background-attachment: fixed; */
		/* perspective-origin: bottom right; */
		padding: 50px 0;
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

	@media (max-width: 767px) {
		.habilidades {
			height: 100%;
			width: 100%;

			background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
				url(../../../static/img/webDeveloper.jpg);
			/* background-repeat: no-repeat; */
			background-repeat: repeat-y;
			background-size: cover;
			/* background-attachment: fixed; */
			/* perspective-origin: bottom right; */
			padding: 50px 0;
			/* transform: skew(0deg, -10deg); */
		}
		/* .text {
			font-size: 2.5rem;
			margin-top: 3rem;
		} */

		/* css maquina de escribit */
		span {
			width: 16ch;
			font-size: 1.4rem;
			margin-top: 4rem;
		}
		p {
			width: 10ch;
			font-size: 2.4rem;
			margin-top: 4rem;
		}
		.st {
			font-size: 1.4rem;
		}
		/* span {
			font-size: 1.2rem;
			margin-top: 6rem;
		} */
	}

	/* // Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		span {
			width: 16ch;
			font-size: 3rem;
			margin-top: 2rem;
		}
		p {
			width: 10ch;
			font-size: 2.4rem;
			margin-top: 1rem;
		}
		.st {
			font-size: 3rem;
			margin-top: 2rem;
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
		.st {
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
