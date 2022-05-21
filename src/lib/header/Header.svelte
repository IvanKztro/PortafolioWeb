<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<!-- <header> -->
<nav class="  px-2 sm:px-4 py-4  bg-black border-b-2 border-b-purple-700">
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
				<!-- <li>
					<a
						href="#contacto"
						class="transition ease-in-out delay-50 hover:-translate-x-6 hover:scale-210 duration-200 text-white   hover:font-bold hover:no-underline hover:text-purple-700"
						>Contacto</a
					>
				</li> -->
			</ul>
		</div>
	</div>
</nav>

<!-- </header> -->
<style>
	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}
</style>
