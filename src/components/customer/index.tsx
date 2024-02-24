import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function Customer() {
	return (
		<section
			id='#customer'
			className='mt-20 md:mt-32'
		>
			<h2 className='text-center text-3xl font-semibold mb-20'>Our Customer</h2>
			<div className='flex flex-col gap-10 grayscale'>
				<Marquee
					autoFill
					gradient
					pauseOnHover
					direction='left'
					speed={25}
				>
					<div className='mx-4'>
						<Image
							src='/images/customers/DATA.webp'
							alt="DATA Ta'lim Stansiyasi"
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
					<div className='mx-4'>
						<Image
							src='/images/customers/vazirlik.png'
							alt='Vazirlik'
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
					<div className='mx-4'>
						<Image
							src='/images/customers/DATA.webp'
							alt="DATA Ta'lim Stansiyasi"
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
					<div className='mx-4'>
						<Image
							src='/images/customers/vazirlik.png'
							alt="DATA Ta'lim Stansiyasi"
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
				</Marquee>
				<Marquee
					autoFill
					gradient
					pauseOnHover
					direction='right'
					speed={25}
				>
					<div className='mx-4'>
						<Image
							src='/images/customers/DATA.webp'
							alt="DATA Ta'lim Stansiyasi"
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
					<div className='mx-4'>
						<Image
							src='/images/customers/vazirlik.png'
							alt='Vazirlik'
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
					<div className='mx-4'>
						<Image
							src='/images/customers/DATA.webp'
							alt="DATA Ta'lim Stansiyasi"
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
					<div className='mx-4'>
						<Image
							src='/images/customers/vazirlik.png'
							alt="DATA Ta'lim Stansiyasi"
							className='object-contain'
							width={180}
							height={200}
						/>
					</div>
				</Marquee>
			</div>
		</section>
	)
}
