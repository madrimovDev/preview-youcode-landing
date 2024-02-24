import Content from './content'
import Navbar from './navbar'

export default function Header() {
	return (
		<section
			id='#home'
			className='min-h-screen lg:h-screen bg-primary '
		>
			<div className='md:max-w-6xl px-4 mx-auto flex h-full flex-col pt-[30px]'>
				<Navbar />
				<Content />
			</div>
		</section>
	)
}
