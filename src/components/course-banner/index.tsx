import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CourseBanner() {
	return (
		<section className='md:max-w-7xl mx-auto mt-28 bg-primary-text px-4 md:px-24 rounded-2xl flex flex-col-reverse md:flex-row items-center md:items-end gap-10 mb-10'>
			<div className='relative pt-2 px-4  aspect-square'>
				<Image
					src='/images/banner.png'
					alt='youcode'
					className='relative z-[1] w-[485px] '
					width={485}
					height={514}
				/>
				<div className='absolute w-[90%] md:w-96 scale-95 bottom-0 left-1/2 -translate-x-[60%] z-[0] aspect-square bg-primary rounded-full' />
			</div>
			<div className='self-center md:w-3/5 flex px-2 py-10 flex-col gap-2 items-start'>
				<h2 className='font-semibold text-3xl text-primary'>
					Our courses cover a range of topics. <br /> Including accounting
					finance and more
				</h2>

				<p className='mt-4 opacity-80'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
					voluptatum nihil debitis nam, accusamus blanditiis excepturi hic
					aliquam illum, ab, corporis natus
				</p>
				<ul className='flex flex-col gap-4 mt-4'>
					<li className='flex items-center gap-4'>
						<span className='p-1 bg-primary text-xs rounded-full text-white'>
							<Check size='1.3em' />
						</span>
						<span className='text-xs md:text-base'>
							This course and was amazed by how much i learned
						</span>
					</li>
					<li className='flex items-center gap-4'>
						<span className='p-1 bg-primary text-xs rounded-full text-white'>
							<Check size='1.3em' />
						</span>
						<span className='text-xs md:text-base'>
							This course and was amazed by how much i learned
						</span>
					</li>
				</ul>
				<Link
					href='#'
					className='bg-primary inline-block text-white md:text-xl px-8 py-2 rounded-lg font-semibold capitalize mt-4'
				>
					Ko&apos;proq bilish
				</Link>
			</div>
		</section>
	)
}
