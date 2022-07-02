<script>
	const arrayfrontend = [
		{
			title: 'HTML',
			url: 'html.png'
		},
		{
			title: 'CSS',
			url: 'css.png'
		},
		{
			title: 'JavaScript',
			url: 'javascript.png'
		},
		{
			title: 'JQuery',
			url: 'jquery.png'
		},
		{
			title: 'Bootstrap',
			url: 'bootstrap.png'
		},
		{
			title: 'Tailwind',
			url: 'tailwind.png'
		},
		{
			title: 'Vue',
			url: 'vue.png'
		},
		{
			title: 'React',
			url: 'react.png'
		},
		{
			title: 'Svelte',
			url: 'svelte.png'
		}
	];

	const arraybackend = [
		{
			title: 'PHP',
			url: 'php.png'
		},
		{
			title: 'Node',
			url: 'node.png'
		},
		{
			title: 'MongoDB',
			url: 'mongodb.png'
		},
		{
			title: 'MySQL',
			url: 'mysql.png'
		},
		{
			title: 'Firebase',
			url: 'firebase.png'
		}
	];
</script>

<div class="container mx-auto">
	<h4 class="text-white text-4xl text-center mb-3">Frontend</h4>
	<div class="grid  gap-5 text justify-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
		{#each arrayfrontend as fr}
			<div class=" flex justify-center my-4">
				<div>
					<!-- svelte-ignore a11y-missing-attribute -->
					<img style="height: 8rem" src="./img/{fr.url}" alt={fr.title} class="" />
					<p class="text-center text-white">{fr.title}</p>
				</div>
				<div />
			</div>
		{/each}
	</div>
	<h4 class="text-white text-4xl text-center mb-3 mt-7">Backend</h4>
	<div class="grid  gap-2 text justify-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
		{#each arraybackend as ba}
			<div class=" flex justify-center my-4">
				<div>
					<!-- svelte-ignore a11y-missing-attribute -->
					<img style="height: 8rem" src="./img/{ba.url}" alt={ba.title} class="" />
					<p class="text-center text-white">{ba.title}</p>
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
