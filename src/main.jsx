import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Meesho from './components/Meesho.jsx'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link
} from 'react-router-dom'
import Amazon from './components/Amazon.jsx'
import Flipkart from './components/Flipkart.jsx'
import Gstcal from './components/Gstcal.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/meesho',
				element: <Meesho />
			},
			{
				path: '/amazon',
				element: <Amazon />
			},
			{
				path: '/flipkart',
				element: <Flipkart />
			},
			{
				path: '/gstcal',
				element: <Gstcal />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

reportWebVitals()
