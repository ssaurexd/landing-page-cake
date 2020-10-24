export const phone = '+525614754176'
export const instagramUrl = 'https://www.instagram.com/romanher.s/?__a=1'
export const slickSettings = {
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 2,
	initialSlide: 0,
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1000,
	pauseOnHover: true,
	responsive: [
		{
			breakpoint: 1553,
			settings: {
				slidesToShow: 3.5,
				slidesToScroll: 2,
				initialSlide: 2,
			}
		},
		{
			breakpoint: 1359,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				initialSlide: 2,
			}
		},
		{
			breakpoint: 1169,
			settings: {
				slidesToShow: 2.5,
				slidesToScroll: 2,
				initialSlide: 2,
			}
		},
		{
			breakpoint: 970,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				initialSlide: 1,
			}
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 1.5,
				slidesToScroll: 1,
				initialSlide: 2,
				className: "center",
				centerMode: true,
				autoplay: false,
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false
			}
		}
	]
}