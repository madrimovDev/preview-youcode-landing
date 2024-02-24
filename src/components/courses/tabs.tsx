'use client'
import RcTabs from 'rc-tabs'
import 'rc-tabs/assets/index.css'
import './courses.css'
import CourseSlider from './course-slider'

export default function Tabs() {
	return (
		<>
			<RcTabs
				className='w-full'
				defaultActiveKey='1'
				tabPosition='top'
				animated={false}
				items={[
					{
						key: '1',
						label: <div>All Categories</div>,
						children: (
							<div className='py-10 md:py-20'>
								<CourseSlider />
							</div>
						)
					},
					{
						key: '2',
						label: 'Backend',
						children: <div className='bg-red-400'> Tab 2 Content </div>
					},
					{
						key: '3',
						label: 'Frontend',
						children: <div className='bg-red-400'> Tab 3 Content </div>
					}
				]}
			/>
		</>
	)
}
