import { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<>
			<div>
				<div>
					<h2 className="text-center text-bold text-4xl font-bold mb-6">
						Price Calculator
					</h2>
				</div>

				<div class="main-box flex justify-center items-center flex-wrap gap-3">
					<div class=" bg-orange-900 text-white px-6 py-2 rounded-3xl ">
						<Link to={'/meesho'}>Meesho</Link>
					</div>
					<div class="bg-black text-white   px-6 py-2 rounded-3xl">
						<Link to={'/amazon'}>Amazon</Link>
					</div>
					<div class="bg-yellow-400 text-black px-6 py-2 rounded-3xl">
						<Link to={'/flipkart'}>Flipkart</Link>
					</div>
					<div class="bg-black text-white px-6 py-2 rounded-3xl">
						<Link to={'/gstcal'}>GST</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
