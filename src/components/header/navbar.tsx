'use client'
import Link from 'next/link'
import Logo from './logo'
import Menu from './menu'
import { LogIn, MenuIcon, X } from 'lucide-react'
import useDisclosure from '@/hooks/useDisclosure'
import { useRef, useState } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick'
import { cn } from '@/utils/classnames'
import useOverflowControl from '@/hooks/useOverflowControll'
import useElementVisibility from '@/hooks/useElementVisibility'

export default function Navbar() {
	const { isOpen, toggle, close } = useDisclosure()
	const [isHeader, setIsHeader] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useOutsideClick(ref, close)
	useOverflowControl(isOpen)
	useElementVisibility('#home', isVisible => {
		setIsHeader(isVisible)
	})

	return (
		<div
			ref={ref}
			className={cn('fixed w-full inset-x-0 top-0 z-50 backdrop-blur-md', {
				'bg-primary/80': !isHeader,
				'bg-transparent': isHeader
			})}
		>
			<div className='p-4 md:py-8 flex items-center max-w-6xl mx-auto'>
				<div className='flex-1'>
					<Logo />
				</div>
				<div className='flex-grow'>
					<Menu isOpen={isOpen} />
				</div>
				<div className='flex-1 text-right flex items-center justify-end'>
					<Link
						className='bg-white hover:shadow-lg inline-flex items-center gap-2 px-6 py-1 text-primary font-semibold text-sm md:text-lg rounded-md'
						href='https://practicum.youcode.uz'
					>
						Kirish
						<LogIn size='1em' />
					</Link>
					<button
						onClick={toggle}
						className={cn(
							'md:hidden mx-2 md:p-4 text-2xl -mr-2 transition-colors relative z-10',
							{
								'text-black': isOpen,
								'text-white': !isOpen
							}
						)}
					>
						{isOpen ? <X size='1em' /> : <MenuIcon size='1em' />}
					</button>
				</div>
			</div>
		</div>
	)
}
