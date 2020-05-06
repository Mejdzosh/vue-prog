var app = new Vue({
	el: '#app',
	data:{
		product:'karts',
		description:'Sejměte kartu, karta s nejvyšší hodnotou vyhravá.',
		image:'img/c_eso.jpg',
		altText:'Nejvyssi karta',
		link:'https://www.talon.cz/',
		link2:'https://www.vuemastery.com/',
		inStock: true,
		details: ["srdcové" , "eso"],
		variants: [
			{
				variantID: 2234,
				variantColor: "red",
				variantImage: "img/c_eso.jpg",
				variantIcon: "img/srdce.png"
			},
			{
				variantID: 2235,
				variantColor: 'green',
				variantImage: "img/e_eso.jpg",
				variantIcon: "img/srdce.png"
			},
			{
				variantID: 2236,
				variantColor: 'brown',
				variantImage: "img/z_eso.jpg",
				variantIcon: "img/srdce.png"
			},
			{
				variantID: 2237,
				variantColor: 'blue',
				variantImage: "img/k_eso.jpg",
				variantIcon: "img/srdce.png"
			}
		],
		cart: 0
	},
	methods:{
		addToCart: function (){
			this.cart += 1
		},
		eraseFromCart: function (){
			this.cart -= 1
		},
		updateProduct(variantImage){
			this.image= variantImage
		}
		
	}

})