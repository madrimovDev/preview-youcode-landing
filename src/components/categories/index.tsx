import { Icons } from '@/assets/icons'

export default function Categories() {
	return (
		<section
			id='categories'
			className='mt-20 md:mt-28'
		>
			<h2 className='text-center text-3xl font-semibold'>
				Explore Our Categories
			</h2>
			<div className='md:max-w-6xl px-4 mx-auto mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 md:gap-6'>
				<div className='flex gap-2 md:gap-4 items-center text-xs md:text-xl font-semibold p-2 md:p-4 border border-black rounded-full'>
					<div className='md:text-4xl bg-primary p-4 fill-white rounded-full'>
						<Icons.UiUx />
					</div>
					<div>
						<h4>UI/UX Design</h4>
						<p>3 Course</p>
					</div>
				</div>
				<div className='flex gap-2 md:gap-4 items-center text-xs md:text-xl font-semibold p-2 md:p-4 border border-black rounded-full'>
					<div className='md:text-4xl bg-primary p-4 fill-white rounded-full'>
						<Icons.UiUx />
					</div>
					<div>
						<h4>UI/UX Design</h4>
						<p>3 Course</p>
					</div>
				</div>
				<div className='flex gap-2 md:gap-4 items-center text-xs md:text-xl font-semibold p-2 md:p-4 border border-black rounded-full'>
					<div className='md:text-4xl bg-primary p-4 fill-white rounded-full'>
						<Icons.UiUx />
					</div>
					<div>
						<h4>UI/UX Design</h4>
						<p>3 Course</p>
					</div>
				</div>
				<div className='flex gap-2 md:gap-4 items-center text-xs md:text-xl font-semibold p-2 md:p-4 border border-black rounded-full'>
					<div className='md:text-4xl bg-primary p-4 fill-white rounded-full'>
						<Icons.UiUx />
					</div>
					<div>
						<h4>UI/UX Design</h4>
						<p>3 Course</p>
					</div>
				</div>
			</div>
		</section>
	)
}
