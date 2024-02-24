import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CourseCard from './course-card'

const settings: Settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
	initialSlide: 0,
	arrows: false,
	customPaging: index => {
		return (
			<span
				data-dots={index}
				className='w-2 block aspect-square rounded-full bg-primary/50'
			/>
		)
	},
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
}
export default function CourseSlider() {
	return (
		<Slider {...settings}>
			{Array.from(new Array(10).entries()).map(([index]) => {
				return <CourseCard key={index} />
			})}
		</Slider>
	)
}
