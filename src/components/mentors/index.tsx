import Image from 'next/image'

export default function Mentors() {
	return (
		<section className='max-w-6xl mx-auto px-4 mt-28'>
			<h2 className='text-center text-3xl font-semibold mb-10'>Our Customer</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 xl:px-0'>
				<div className='space-y-3.5'>
					<Image
						src='/images/header-1.jpg'
						alt='mentor-1'
						width={200}
						height={350}
						className='h-64 w-full rounded-2xl object-cover'
					/>
					<h3 className='text-center text-xl font-semibold'>John Doe</h3>
					<p className='text-center'>Mentor for Frontend</p>
				</div>
				<div className='space-y-3.5'>
					<Image
						src='/images/header-1.jpg'
						alt='mentor-1'
						width={200}
						height={350}
						className='h-64 w-full rounded-2xl object-cover'
					/>
					<h3 className='text-center text-xl font-semibold'>John Doe</h3>
					<p className='text-center'>Mentor for Frontend</p>
				</div>
				<div className='space-y-3.5'>
					<Image
						src='/images/header-1.jpg'
						alt='mentor-1'
						width={200}
						height={350}
						className='h-64 w-full rounded-2xl object-cover'
					/>
					<h3 className='text-center text-xl font-semibold'>John Doe</h3>
					<p className='text-center'>Mentor for Frontend</p>
				</div>
				<div className='space-y-3.5'>
					<Image
						src='/images/header-1.jpg'
						alt='mentor-1'
						width={200}
						height={350}
						className='h-64 w-full rounded-2xl object-cover'
					/>
					<h3 className='text-center text-xl font-semibold'>John Doe</h3>
					<p className='text-center'>Mentor for Frontend</p>
				</div>
			</div>
		</section>
	)
}
