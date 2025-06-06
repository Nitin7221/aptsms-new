import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '../ui/button'

const timelineEvents = [
	{
		year: "1986",
		color: "bg-orange-500",
		title: "First Conceived",
		description: (
			<>
				First conceived by Prof. N. Ch. Pattabhi Ramacharyulu and <strong>Prof. P.V. Arunachalam</strong>.<br />
				The idea for a society dedicated to mathematical sciences in Andhra Pradesh was born.
			</>
		),
	},
	{
		year: "1987",
		color: "bg-green-500",
		title: "First Annual Congress",
		description: (
			<>
				The inaugural Annual Congress and National Conference of APSMS was held.<br />
				Marked the beginning of yearly gatherings for mathematicians and researchers.
			</>
		),
	},
	{
		year: "1987-2007",
		color: "bg-green-400",
		title: "Growth & Recognition",
		description: (
			<>
				Annual Congress and National Conference conducted by APSMS every year.<br />
				The society gained recognition and attracted researchers from India and abroad.
			</>
		),
	},
	{
		year: "2008-2017",
		color: "bg-blue-400",
		title: "Interdisciplinary Expansion",
		description: (
			<>
				Focus on interdisciplinary research and encouragement of young scientists through awards.<br />
				APSMS continued to expand its reach and impact.
			</>
		),
	},
	{
		year: "2018",
		color: "bg-purple-500",
		title: "APSMS to APTSMS",
		description: (
			<>
				APSMS became <strong>APTSMS</strong> to reflect Andhra Pradesh and Telangana separation.<br />
				The society continues its mission as Andhra Pradesh & Telangana Society for Mathematical Sciences.
			</>
		),
	},
];

const About = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-4 md:p-8">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-4xl md:text-3xl font-bold text-gray-800 mb-2">
						About APTSMS
					</h1>
					<div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
				</div>

				<div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 p-8">
					<p className="mb-4 text-gray-700">
						The <strong>Andhra Pradesh Society for Mathematical Sciences</strong> (APSMS) was established in 1986 at the Department of Mathematics, Osmania University, Hyderabad. APSMS was formed with the pioneering efforts of Late Prof. N.Ch. Pattabhi Ramacharyulu, the then Professor of Mathematics, Regional Engineering College, Warangal (Now National Institute of Technology Warangal), and Late Prof. P.V. Arunachalam, the then Professor of Mathematics, Sri Venkateshwara University, Tirupati, &amp; Former Vice Chancellor, Dravidian University.
					</p>
					<p className="mb-4 text-gray-700">
						Since its inception, it has been consistently and successfully organising its annual congresses, providing a common platform for scientists, researchers (young and old), technologists, and engineers to present and discuss the current research work conducted by them individually or in groups in their specialised areas of mathematical sciences. It has been attracting a large number of researchers not only from our country but also from abroad.
					</p>
					<p className="mb-4 text-gray-700">
						The society has made significant progress in encouraging inter-disciplinary research in the mathematical sciences. Young researchers / scientists are encouraged by the Society through awards, which are specifically designed for that purpose.
					</p>
					<p className="mb-8 text-gray-700">
						APSMS was renamed as <strong>Andhra Pradesh and Telangana Society for Mathematical Sciences</strong> (APTSMS) in 2018 in consequence of the separation of the Andhra Pradesh state as Andhra Pradesh and Telangana states.
					</p>

					<div className="mb-8">
						<h3 className="text-lg font-semibold text-green-600 mb-4">Timeline</h3>
						<div className="space-y-6">
							{timelineEvents.map((event) => (
								<div
									key={event.year}
									className="flex flex-col md:flex-row md:items-center bg-gray-50 rounded-xl shadow border border-gray-200 p-4 md:p-6"
								>
									<div className="md:w-32 w-full flex md:justify-end justify-start items-center mb-2 md:mb-0 pr-4">
										<span className="text-2xl font-bold text-green-700 whitespace-nowrap">{event.year}</span>
									</div>
									<div className="flex-1">
										<h4 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h4>
										<div className="text-gray-600 text-sm">{event.description}</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="flex flex-wrap justify-center gap-4 mt-8">
						<Button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg shadow">
							<Link to="/announcement">
								<b>Join APTSMS</b>
							</Link>
						</Button>
						<Button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow">
							<Link to="/president-message">
								<b>Read President Message</b>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About