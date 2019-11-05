console.log('hola')


const url = 'https://api.themoviedb.org/3/search/movie'
const api = '?api_key=21f53417a5404d2ee865b5d4641ec478'
const busqueda = 'dragon'
const query = '&query='+busqueda
const pagina = '&page=1';

const img_base_url = 'https://image.tmdb.org/t/p/w500'

const target = document.querySelector('.your-class')

function busq() {
	const promesa = fetch(url+api+query)
  	.then(response => response.json())
		.then((data) => {
			console.log(data)
			const resultados = data.results
			resultados.map((resultado, i) => {
				var {original_title, overview, popularity, poster_path} = resultado
				var poster_link = img_base_url+poster_path
				var slider_item = document.createElement('div')
				slider_item.setAttribute("class", "slider-item d-flex justify-content-center" )
				// slider_item.setAttribute("background", 'url('+poster_link+')')

				slider_item.innerHTML = `
				<div class="slide-card">
					<div class="wrapper" style ="background: url(${poster_link}) 20% 1% / cover no-repeat">
						<div class="date">
							<span class="day">12</span>
							<span class="month">Aug</span>
						</div>
						<div class="data">
							<div class="content">
								<h2 class="title">${original_title}</h2>
								<div class="text"><p>${overview}</p>
							</div>
								<div class="info-buttons row d-flex justify-content-end"><div class="col-6 px-2 mt-2"><button class="info-btn btn-ahora">Ver ahora</button></div></div>
							</div>
						</div>
					</div>
				</div>
				`
				target.slick('slickAdd', slider_item)


			} )

		})
		.catch(error => console.log('Error'))

}

document.addEventListener("DOMContentLoaded", function() {
	busq()
});

//
//
// $(document).ready(function(){
// 	$('.your-class').slick({
//   infinite: false,
//   slidesToShow: 4,
//   slidesToScroll: 1,
// 	responsive: [
// 	    {
// 	      breakpoint: 1200,
// 	      settings: {
// 	        slidesToShow: 3,
// 	        slidesToScroll: 3,
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 1000,
// 	      settings: {
// 	        slidesToShow: 2,
// 	        slidesToScroll: 2
// 	      }
// 	    },
// 	    {
// 	      breakpoint: 600,
// 	      settings: {
// 	        slidesToShow: 1,
// 	        slidesToScroll: 1
// 	      }
// 	    }
// 	  ]
// });
// });
