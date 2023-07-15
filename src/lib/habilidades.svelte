<script>
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	onMount(async () => {
		// setTimeout(() => {
		const aso = AOS.init({});
		// const aso = AOS.init();
		// console.log(aso);
		// }, 4000);
	});

	const arrayfrontend = [
		{
			title: 'HTML <br><small>3 años</small>',
			url: 'html.png'
		},
		{
			title: 'CSS <br><small>3 años</small>',
			url: 'css.png'
		},
		{
			title: 'JavaScript <br><small>3 años</small>',
			url: 'javascript.png'
		},
		{
			title: 'TypeScript <br><small>2 años</small>',
			url: 'typescript.png'
		},
		// {
		// 	title: 'JQuery <br><small>Un año</small>',
		// 	url: 'jquery.png'
		// },
		{
			title: 'Bootstrap <br><small>Un año</small>',
			url: 'bootstrap.png'
		},
		{
			title: 'Tailwind <br><small>2 años</small>',
			url: 'tailwind.png'
		},
		{
			title: 'Vue <br><small>Un año</small>',
			url: 'vue.png'
		},
		// {
		// 	title: 'React<br><small>Un año</small>',
		// 	url: 'react.png'
		// },
		// {
		// 	title: 'Svelte <br><small>Un año</small>',
		// 	url: 'svelte.png'
		// },
		{
			title: 'Angular <br><small>2 años</small>',
			url: 'angular.png'
		}
	];

	const arraybackend = [
		{
			title: 'PHP <br><small>Un año</small>',
			url: 'php.png'
		},
		{
			title: 'Node <br><small>6 meses</small>',
			url: 'node.png'
		},
		// {
		// 	title: 'MongoDB',
		// 	url: 'mongodb.png'
		// },
		{
			title: 'MySQL  <br><small>Un año</small>',
			url: 'mysql.png'
		},
		{
			title: 'Firebase <br><small>2 años</small>',
			url: 'firebase.png'
		}
	];
</script>

<div class="container mx-auto">
	<h4 class="text-white text-4xl text-center mb-3" data-aos="flip-down" data-aos-duration="3500">
		Frontend
	</h4>
	<div class="grid  gap-5 text justify-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
		{#each arrayfrontend as fr}
			<div
				class=" flex justify-center my-4"
				data-aos="fade-right"
				data-aos-easing="linear"
				data-aos-duration="3500"
			>
				<div>
					<!-- svelte-ignore a11y-missing-attribute -->
					<img style="height: 8rem" src="./img/{fr.url}" alt={fr.title} class="" />
					<p class="text-center text-white">{@html fr.title}</p>
				</div>
				<div />
			</div>
		{/each}
	</div>
	<h4
		class="text-white text-4xl text-center mb-3 mt-7"
		data-aos="flip-down"
		data-aos-duration="3100"
	>
		Backend
	</h4>
	<div class="grid  gap-2 text justify-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
		{#each arraybackend as ba}
			<div
				class=" flex justify-center my-4"
				data-aos="fade-left"
				data-aos-easing="linear"
				data-aos-duration="3200"
			>
				<div>
					<!-- svelte-ignore a11y-missing-attribute -->
					<img style="height: 8rem" src="./img/{ba.url}" alt={ba.title} class="" />
					<p class="text-center text-white">{@html ba.title}</p>
				</div>
				<div />
			</div>
		{/each}
	</div>
	<!-- </div> -->
</div>

<style>
	.tool {
		color: white;
	}
</style>
