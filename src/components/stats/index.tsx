'use client'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

export default function Stats() {
	return (
		<section className='md:max-w-6xl p-10 md:p-28 mx-auto bg-primary-text rounded-lg shadow-md flex flex-col md:flex-row justify-between gap-10'>
			<ReactVisibilitySensor>
				{({ isVisible }: { isVisible: boolean }) => (
					<>
						<div className='flex flex-col items-center gap-4 text-xl'>
							{!isVisible ? (
								<span className='inline-block text-3xl font-semibold'>1K</span>
							) : (
								<CountUp
									end={100}
									start={1}
									suffix='K'
									className='text-3xl font-semibold'
								/>
							)}
							Students Enrolled
						</div>
						<div className='flex flex-col items-center gap-4 text-xl'>
							{!isVisible ? (
								<span className='inline-block text-3xl font-semibold'>1+</span>
							) : (
								<CountUp
									end={250}
									start={1}
									suffix='+'
									className='text-3xl font-semibold'
								/>
							)}
							Expert mentors
						</div>
						<div className='flex flex-col items-center gap-4 text-xl'>
							{!isVisible ? (
								<span className='inline-block text-3xl font-semibold'>1K</span>
							) : (
								<CountUp
									end={50}
									start={1}
									suffix='K'
									className='text-3xl font-semibold'
								/>
							)}
							Students Reviews
						</div>
						<div className='flex flex-col items-center gap-4 text-xl'>
							{!isVisible ? (
								<span className='inline-block text-3xl font-semibold'>1%</span>
							) : (
								<CountUp
									end={96}
									start={1}
									suffix='%'
									className='text-3xl font-semibold'
								/>
							)}
							Success Rating
						</div>
					</>
				)}
			</ReactVisibilitySensor>
		</section>
	)
}
