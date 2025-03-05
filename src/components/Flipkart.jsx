import { useEffect, useState } from 'react'
import meeshoimg from '../assets/img/meesho.png'
import amzimg from '../assets/img/amazon.png'
import flipimg from '../assets/img/flipkart.png'
import { Link, Outlet } from 'react-router-dom'

function Flipkart() {
	const [buyPrice, setBuyPrice] = useState('')
	const [gst, setGst] = useState(5)
	const [packaging, setPackaging] = useState('')
	const [transport, setTransport] = useState('')
	const [profit, setProfit] = useState('')
	const [finalPrice, setFinalPrice] = useState(0)

	useEffect(() => {
		const basePrice =
			parseFloat(buyPrice) + parseFloat(packaging) + parseFloat(transport)
		const gstAmount = (buyPrice * parseFloat(gst)) / 100
		const finalAmount = basePrice + gstAmount + parseFloat(profit)

		const flipkartAmt = finalAmount * 2

		setFinalPrice(flipkartAmt.toFixed(2))
	}, [buyPrice, gst, packaging, transport, profit])

	return (
		<>
			<div className="container p-6  mx-auto bg-white shadow-lg rounded-lg">
				<img className="w-20 mx-auto" src={flipimg} alt="Meesho Logo" />

				<div className="flex flex-wrap">
					<div className="w-full p-2 md:md:w-1/2">
						<label>Product Buy Price:</label>
						<input
							type="number"
							value={buyPrice}
							onChange={(e) => setBuyPrice(e.target.value)}
							placeholder="Enter buy price"
							className="input w-full"
						/>
					</div>

					<div className="w-full p-2 md:md:w-1/2">
						<label>GST (%):</label>
						<select
							value={gst}
							onChange={(e) => setGst(e.target.value)}
							className="input"
						>
							<option value="5">5%</option>
							<option value="12">12%</option>
							<option value="18">18%</option>
							<option value="28">28%</option>
						</select>
					</div>
				</div>

				<div className="flex flex-wrap">
					<div className="w-full p-2 md:md:w-1/2">
						<label>Packaging Charge:</label>
						<input
							type="number"
							value={packaging}
							onChange={(e) => setPackaging(e.target.value)}
							placeholder="Enter packaging charge"
							className="input"
						/>
					</div>

					<div className="w-full p-2 md:md:w-1/2">
						<label>Transport Charge:</label>
						<input
							type="number"
							value={transport}
							onChange={(e) => setTransport(e.target.value)}
							placeholder="Enter transport charge"
							className="input"
						/>
					</div>
				</div>

				<label>Profit:</label>
				<input
					type="number"
					value={profit}
					onChange={(e) => setProfit(e.target.value)}
					placeholder="Minimum 100 Rs."
					className="input"
				/>

				<h3 className="mt-4 text-lg font-bold bg-green-700 text-white py-2 rounded">
					Final Price: ₹ {isNaN(finalPrice) ? 0 : finalPrice}
				</h3>
				<div className="flex justify-center items-center mt-6 gap-4">
					<div>
						<Link to={'/amazon'}>
							<img className="w-14" src={amzimg} alt="amazon" />
						</Link>
					</div>
					<div>
						<Link to={'/meesho'}>
							<img
								className="w-14"
								src={meeshoimg}
								alt="meeshoimg"
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Flipkart
