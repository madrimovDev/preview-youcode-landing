import { cn } from '@/utils/classnames'
import Link from 'next/link'
import { useRef } from 'react'

interface Props {
	isOpen: boolean
}

export default function Menu({ isOpen }: Props) {
	const ref = useRef<HTMLUListElement>(null)
	return (
		<>
			<ul
				ref={ref}
				className={cn(
					'fixed top-0 right-0 bottom-0 w-full h-screen md:h-auto max-w-[300px] md:w-auto md:max-w-none text-primary px-4 pt-10 md:p-0 md:pt-0 flex-col md:flex-row bg-white md:bg-primary/0 md:static flex md:justify-center gap-2 text-xl md:gap-4 lg:gap-8 md:text-gray-200 md:text-lg lg:text-xl font-semibold transition-all md:translate-x-0 shadow-lg md:shadow-none',
					{
						'translate-x-full': !isOpen,
						'translate-x-0': isOpen
					}
				)}
			>
				<li>
					<Link
						className='md:hover:text-white'
						href='#'
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						className='md:hover:text-white'
						href='#course-content'
					>
						Course content
					</Link>
				</li>
				<li>
					<Link
						className='md:hover:text-white'
						href='#resources'
					>
						Resources
					</Link>
				</li>
				<li>
					<Link
						className='md:hover:text-white'
						href='#support'
					>
						Support
					</Link>
				</li>
				<li>
					<Link
						className='md:hover:text-white'
						href='#about'
					>
						About
					</Link>
				</li>
			</ul>
		</>
	)
}
