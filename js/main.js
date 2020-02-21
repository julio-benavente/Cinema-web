console.log('hola')


const pop_url = 'https://api.themoviedb.org/3/movie/popular'
const search_url = 'https://api.themoviedb.org/3/search/movie'
const discover_url = 'https://api.themoviedb.org/3/discover/movie'
const api = '?api_key=21f53417a5404d2ee865b5d4641ec478'
const busqueda = 'papa'
const query = '&query='+busqueda
const lang = '&language=en-US'
const pagina = '&page=1';

const img_base_url = 'https://image.tmdb.org/t/p/w500'

var puntero = $('.your-class')

// Places
const target = document.querySelector('.your-class')

const slider_wraper = document.querySelector('.slider-wraper')
function busq(place) {

	const promesa = fetch(pop_url+api+query+lang)
  	.then(response => response.json())
		.then((data) => {
			console.log(data)
			const resultados = data.results

			resultados.map((resultado, i) => {
				var {original_title, overview, popularity, poster_path} = resultado
				var poster_link = img_base_url+poster_path

				var slider_item = document.createElement('div')
				slider_item.setAttribute("class", "slider-item d-flex justify-content-center" )

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

				var addSlide = (node_slick, item) => {
					node_slick.slick('slickAdd',item);
				}

				addSlide(puntero, slider_item)
			})
		})
		.catch(error => console.log('Error'))

}

document.addEventListener("DOMContentLoaded", function() {
	// busq(puntero)
});


$(document).ready(function(){

	// Slick slider for Movies
	$('.your-class').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
	responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
});

$('.hero-slider').slick({
infinite: true,
dots: true,
fade: true,
slidesToShow: 1,
slidesToScroll: 1,
responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


});





// Practicando con la API
//
const filter = document.querySelector('#filter')
const pop_btn = filter.querySelector('.popular')
const genre_link = '&with_genres='
const genre_btn = Array.from(filter.querySelectorAll('.genre'))

pop_btn.addEventListener('click', () => {
	while ($('.your-class').slick('slickRemove',0)) {
	$('.your-class').slick('slickRemove',0)
	}
	busq(puntero)})
genre_btn.map((e) => {

	e.addEventListener('click', (e) => search_gender(e.target))
})


function search_gender(e) {
	while ($('.your-class').slick('slickRemove',0)) {
	$('.your-class').slick('slickRemove',0)
	}
	const genre_id = e.attributes.genre_id.value
	const promesa = fetch(discover_url+api+query+genre_link+genre_id)
  	.then(response => response.json())
		.then((data) => {

			const resultados = data.results

			resultados.map((resultado, i) => {
				var {original_title, overview, popularity, poster_path} = resultado
				var poster_link = img_base_url+poster_path
				var slider_item = document.createElement('div')
				slider_item.setAttribute("class", "slider-item d-flex justify-content-center" )


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
				var addSlide = (node_slick, item) => {
					node_slick.slick('slickAdd',item);
				}


				addSlide(puntero, slider_item)
			} )

		})
		.catch(error => console.log('Error'))


}
