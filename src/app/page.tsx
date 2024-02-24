import Categories from '@/components/categories'
import CourseBanner from '@/components/course-banner'
import Courses from '@/components/courses'
import Customer from '@/components/customer'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Mentors from '@/components/mentors'
import Stats from '@/components/stats'

export default function Home() {
	return (
		<div>
			<Header />
			<Customer />
			<Categories />
			<CourseBanner />
			<Courses />
			<Stats />
			<Mentors />
			<Footer />
		</div>
	)
}
