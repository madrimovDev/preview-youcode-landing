export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white mt-20 py-20'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_200px_200px_1fr] gap-10 px-4 md:px-0'>
					<div>
						<h2 className='text-4xl'>Youcode</h2>
						<p className='mt-6'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Distinctio, iusto. Quod ullam ad hic iure facere doloribus natus,
						</p>
					</div>
					<div>
						<ul className='space-y-3'>
							<li className='text-2xl font-bold'>Compay</li>
							<li>Home</li>
							<li>Course Content</li>
							<li>Resource</li>
							<li>Support</li>
							<li>About</li>
						</ul>
					</div>
					<div>
						<ul className='space-y-3'>
							<li className='text-2xl font-bold'>Courses</li>
							<li>Frontend</li>
							<li>Backend</li>
							<li>UI/UX</li>
							<li>SMM</li>
						</ul>
					</div>
					<div>
						<ul className='space-y-3'>
							<li className='text-2xl font-bold'>Contact Information</li>
							<li>
								<span className='font-bold'>Address:</span> Uzbekistan, Kharezm,
								Urganch
							</li>
							<li>
								<span className='font-bold'>Phone:</span> +998914245014
							</li>
							<li>
								<span className='font-bold'>Email:</span> madrimov5014@gmail.com
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
