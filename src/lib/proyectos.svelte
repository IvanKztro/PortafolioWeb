<script lang="ts">
	const arrayProjects = [
		// {
		// 	title: 'PetsCitas Veterinarias',
		// 	image: './img/react-citas.PNG',
		// 	url: 'https://react-vite-citas-pets.netlify.app',
		// 	tools: ['React', 'tailwindcss', 'localStorage', 'vite']
		// 	//React, Bootstrap, Next.js, Firebase
		// 	// tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
		// },
		{
			title: 'Login',
			image: './img/vue_ncP.jpg',
			url: 'https://sleepy-thompson-be6395.netlify.app',
			tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
		},
		// {
		// 	title: 'Consultor de criptomonedas',
		// 	image: './img/criptos.PNG',
		// 	url: 'https://react-criptos-vite.netlify.app',
		// 	//React, Json, Bootstrap, Consumo de API de criptomonedas
		// 	tools: ['React', 'Consumo de API', 'Tailwind']
		// },
		{
			title: 'PokeDex',
			image: './img/pokedex-api.PNG',
			url: 'https://pokedex-api-alpha.vercel.app/',
			//React, Json, Bootstrap, Consumo de API de criptomonedas
			tools: ['Next', 'Consumo de API', 'Tailwind']
		},
		// {
		// 	title: 'Carrito de compras',
		// 	image: './img/vue_carrito.jpg',
		// 	url: 'https://ivankztro.github.io/carrito-de-compras/View/index.html',
		// 	tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
		// },
		{
			title: 'Peliculas',
			image: './img/vue_movies.jpg',
			url: 'https://vue-cartelera.herokuapp.com/home',
			tools: ['Vue', 'CSS', 'Bootstrap', 'Consumo de API']
		},
		{
			title: 'Product Hunt clon',
			image: './img/react_productHunt.JPG',
			url: 'https://product-hund-next.web.app/',
			tools: ['Next.js', 'Firebase', 'Bootstrap']
			//React, Bootstrap, Next.js, Firebase
			// tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
		},
		{
			title: 'Gestor de Almacén',
			image: './img/shoes-shop.PNG',
			url: 'https://shoes-shop-web.web.app/',
			tools: ['Angular', 'Firebase', 'Angular Material UI']
			//React, Bootstrap, Next.js, Firebase
			// tools: ['HTML', 'JS', 'CSS', 'Bootstrap']
		}
	];
</script>

<div id="Proyectos" class="container mx-auto">
	<div class="">
		<h2 class="text-center my-8 text-white text-4xl">PROYECTOS PERSONALES</h2>
	</div>
	<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-center">
		{#each arrayProjects as p}
			<div class=" rounded-lg  shadow-lg bg-purple-200 ">
				<img class="w-full rounded-lg" src={p.image} alt="Sunset in the mountains" />
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{p.title}</div>
					<!-- <p class="text-gray-700 text-base">Vue, CSS, Bootstrap, consumo de API</p> -->
				</div>
				<div class="px-6 pt-3 pb-4">
					{#each p.tools as t}
						<span
							class="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
							>{t}</span
						>
					{/each}
				</div>
				<div class="px-6 pt-3 pb-4">
					<a
						href={p.url}
						target="_blank"
						rel="noopener noreferrer"
						class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
						>Ver</a
					>
				</div>
			</div>
		{/each}
	</div>

	<!-- <div class="card col-lg-4  col-12">
				<img src="./img/react_noticias.JPG" class="card-img-top mx-auto" style="height: 20rem;" />
				<div class="card-body">
					<h5 class="card-title">Noticias del momento</h5>

					<p class="card-text">React, Json, Bootstrap, consumo API de noticas de México</p>
					<a
						href="https://fervent-shirley-ddcb6a.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
						class="detalles btn btn-primary">Ver</a
					>
				</div>
			</div> -->
</div>
