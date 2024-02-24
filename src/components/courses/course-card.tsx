import { Clock, NotebookText, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CourseCard() {
	return (
		<div className='mx-2 mb-10 overflow-hidden shadow-xl rounded-2xl'>
			<Image
				src='/images/header-1.jpg'
				alt='course name'
				width={200}
				height={200}
				className='w-full aspect-video'
				style={{ height: 'auto' }}
			/>
			<div className='py-4 px-8 flex flex-col gap-6'>
				<div className='flex gap-1 text-lg items-center'>
					<Star
						size='1em'
						fill='black'
					/>
					<Star
						size='1em'
						fill='black'
					/>
					<Star
						size='1em'
						fill='black'
					/>
					<Star
						size='1em'
						fill='black'
					/>
					<Star size='1em' />
					<div className='ml-2 font-medium'>55 reviews</div>
				</div>
				<div className=''>
					<h4 className='text-primary text-xl font-semibold'>
						Advanced Digital Marketing Strategies
					</h4>
				</div>
				<div className='flex gap-4'>
					<div className='flex items-center gap-1 text-xs'>
						<span className='text-primary'>
							<Users size='1.6em' />
						</span>
						85 enrolled
					</div>
					<div className='flex items-center gap-1 text-xs'>
						<span className='text-primary'>
							<NotebookText size='1.6em' />
						</span>
						20 lessons
					</div>
					<div className='flex items-center gap-1 text-xs'>
						<span className='text-primary'>
							<Clock size='1.6em' />
						</span>
						3h 45min
					</div>
				</div>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center text-lg font-medium'>
						<Image
							src='/images/header-2.jpg'
							alt='avatart'
							width={30}
							height={30}
							className='aspect-square rounded-full object-cover'
						/>
						John Doe
					</div>
					<div className='text-primary text-2xl font-semibold'>55$</div>
				</div>
				<div className='text-center'>
					<Link
						href='/'
						className='inline-block bg-primary px-4 py-1 text-white rounded-md font-semibold'
					>
						Enroll now
					</Link>
				</div>
			</div>
		</div>
	)
}
