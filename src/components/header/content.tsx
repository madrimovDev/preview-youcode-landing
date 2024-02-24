import { Sparkle } from 'lucide-react'
import Image from 'next/image'

export default function Content() {
	return (
		<article className='mt-14 md:mt-20 pb-16 flex flex-col h-full'>
			<div className=''>
				<h1
					title='Advance Your Career with Our Online Courses'
					className='md:text-right leading-normal text-primary-text flex flex-col gap-4 items-start md:items-end w-full text-4xl sm:text-5xl md:text-7xl font-bold'
				>
					<span>Advance Your Career with Our</span>
					<span className='inline-flex items-center flex-row-reverse md:flex-row gap-2'>
						<Sparkle
							size='1em'
							strokeWidth={2}
						/>
						Online Courses
					</span>
				</h1>
				<p className='w-full lg:max-w-xl ml-auto mt-10 md:pl-4 text-primary-text font-medium leading-relaxed'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
					aliquam repellendus consequuntur fuga illum voluptate labore eveniet,
					doloremque cupiditate totam tempora autem minima accusantium
				</p>
			</div>
			<div className='h-full lg:-mt-24 mt-10 grid grid-cols-2 lg:grid-cols-[450px_350px_1fr] lg:grid-rows-1 grid-rows-2 gap-4 lg:gap-8 place-items-end'>
				<Image
					src='/images/header-1.jpg'
					alt='online education'
					className='row-span-2 lg:row-auto w-full h-full object-cover object-center rounded-2xl overflow-hidden'
					width={450}
					height={800}
				/>
				<Image
					src='/images/header-2.jpg'
					alt='online education'
					className='w-full h-full lg:h-[75%] object-cover object-center rounded-2xl overflow-hidden'
					width={350}
					height={390}
				/>
				<Image
					src='/images/header-3.jpg'
					alt='online education'
					className='w-full h-full lg:h-[53%] object-cover object-center rounded-2xl overflow-hidden'
					width={350}
					height={390}
				/>
			</div>
		</article>
	)
}
