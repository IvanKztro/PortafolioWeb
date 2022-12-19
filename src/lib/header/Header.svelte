<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';

	let open = false;
</script>

<!-- <header> -->

<!-- <nav class=" navbar px-2 sm:px-4 py-4  bg-black border-b-2 border-b-purple-700">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a href="#" class="flex">
			<span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white" />
		</a>

		<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
			<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
				<li>
					<a
						href="#habilidades"
						class="transition ease-in-out delay-50 hover:-translate-x-6 hover:scale-210 duration-200 text-white   hover:font-bold hover:no-underline hover:text-purple-700"
						>Habilidades</a
					>
				</li>
				<li>
					<a
						href="#proyectos"
						class="transition ease-in-out delay-50 hover:-translate-x-6 hover:scale-210 duration-200 text-white   hover:font-bold hover:no-underline hover:text-purple-700"
						>Proyectos</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav> -->

<!-- </header> -->

<nav id="navbar" class="fixed w-full z-50">
	<a href="#" class="logo text-white ">IVAN CASTRO</a>

	<input type="checkbox" name="toggler" id="toggler" />
	<label
		for="toggler"
		on:click={() => {
			open = !open;
		}}
	>
		<i class="bars {open ? 'open' : ''}">
			<div class=" bar bar1" />
			<div class=" bar bar2" />
			<div class=" bar bar3" />
		</i>
	</label>

	<div class="menu">
		<ul class="list">
			<li>
				<a
					href="#habilidades"
					class="transition ease-in-out delay-50 hover:-translate-x-6 hover:scale-210 duration-200 text-white   hover:font-bold hover:no-underline "
					>HABILIDADES</a
				>
			</li>
			<li>
				<a
					href="#proyectos"
					class="transition ease-in-out delay-50 hover:-translate-x-6 hover:scale-210 duration-200 text-white   hover:font-bold hover:no-underline "
					>PROYECTOS</a
				>
			</li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	#navbar {
		background-color: #894cec;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		color: white;
		padding: 10px 15px;
	}
	.list {
		display: flex;
		gap: 2rem;
	}

	#navbar label,
	#toggler {
		display: none;
	}

	.bar {
		background-color: white;
		height: 4px;
		width: 35px;
		border-radius: 12px;
		margin: 5px 0;
		transition: all 0.3s linear;
	}

	.open .bar1 {
		transform: rotate(45deg) translate(5px, 4px);
	}

	.open .bar2 {
		opacity: 0;
	}

	.open .bar3 {
		transform: rotate(-45deg) translate(8px, -7px);
	}

	@media (max-width: 589px) {
		#navbar label {
			display: inline-flex;
			cursor: pointer;
		}

		.menu {
			max-height: 0;
			width: 100%;
			overflow: hidden;
		}

		.list {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;
		}

		#toggler:checked ~ .menu {
			max-height: 100%;
		}
	}

	/* #navbar {
		background-color: #894cec;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 1rem 2rem;
	}

	.list {
		display: flex;
		gap: 2rem;
	}

	#toggler,
	#navbar label {
		display: none;
	}

	.bar {
		background-color: white;
		height: 0.3rem;
		width: 1.8rem;
		border-radius: 0.5rem;
		margin: 4px 0;
		transition: all 0.3s linear;
	}

	.open .bar1 {
		transform: rotate(45deg) translate(5px, 4px);
	}

	.open .bar2 {
		opacity: 0;
	}

	.open .bar3 {
		transform: rotate(-45deg) translate(8px, -7px);
	}

	@media (max-width: 598px) {
		#navbar label {
			display: inline-flex;
			cursor: pointer;
		}

		.menu {
			width: 100%;
			max-height: 0;
			overflow: hidden;
		}

		.list {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}

		#toggler:checked ~ .menu {
			max-height: 100%;
		}
	} */
</style>
