import Link from 'next/link'

export default function Logo() {
	return (
		<Link
			href='/'
			className='text-xl md:text-3xl font-bold text-white'
		>
			Youcode
		</Link>
	)
}
